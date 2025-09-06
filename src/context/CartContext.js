import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for the cart
const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

// Action types
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      console.log('ADD_TO_CART action received:', action.payload);
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        console.log('Item already exists in cart:', existingItem);
        const updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        const newState = {
          ...state,
          cartItems: updatedCartItems,
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price,
        };
        
        console.log('Updated state (existing item):', newState);
        return newState;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        
        const newState = {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.price,
        };
        
        console.log('Updated state (new item):', newState);
        return newState;
      }
    }
      
    case actionTypes.REMOVE_FROM_CART: {
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity),
      };
    }
      
    case actionTypes.UPDATE_QUANTITY: {
      const itemToUpdate = state.cartItems.find(item => item.id === action.payload.id);
      const quantityDifference = action.payload.quantity - itemToUpdate.quantity;
      
      const updatedCartItemsWithQuantity = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      
      return {
        ...state,
        cartItems: updatedCartItemsWithQuantity,
        totalItems: state.totalItems + quantityDifference,
        totalAmount: state.totalAmount + (itemToUpdate.price * quantityDifference),
      };
    }
      
    case actionTypes.CLEAR_CART:
      return initialState;
      
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : initialState;
  });
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    console.log('Saving cart to localStorage:', state);
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
  
  // Action creators
  const addToCart = (product) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product,
    });
  };
  
  const removeFromCart = (productId) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: productId,
    });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      payload: {
        id: productId,
        quantity,
      },
    });
  };
  
  const clearCart = () => {
    dispatch({
      type: actionTypes.CLEAR_CART,
    });
  };
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};