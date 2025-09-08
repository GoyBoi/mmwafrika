import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for the wishlist
const initialState = {
  wishlistItems: [],
  totalItems: 0,
};

// Action types
const actionTypes = {
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST',
};

// Wishlist reducer
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST: {
      console.log('ADD_TO_WISHLIST action received:', action.payload);
      const existingItem = state.wishlistItems.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Item already in wishlist, don't add again
        console.log('Item already exists in wishlist:', existingItem);
        return state;
      } else {
        const newItem = {
          ...action.payload,
        };
        
        const newState = {
          ...state,
          wishlistItems: [...state.wishlistItems, newItem],
          totalItems: state.totalItems + 1,
        };
        
        console.log('Updated wishlist state (new item):', newState);
        return newState;
      }
    }
      
    case actionTypes.REMOVE_FROM_WISHLIST: {
      const updatedWishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
      
      return {
        ...state,
        wishlistItems: updatedWishlistItems,
        totalItems: state.totalItems - 1,
      };
    }
      
    case actionTypes.CLEAR_WISHLIST:
      return initialState;
      
    default:
      return state;
  }
};

// Create context
const WishlistContext = createContext();

// Wishlist provider component
export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState, () => {
    const localData = localStorage.getItem('wishlist');
    return localData ? JSON.parse(localData) : initialState;
  });
  
  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    console.log('Saving wishlist to localStorage:', state);
    localStorage.setItem('wishlist', JSON.stringify(state));
  }, [state]);
  
  // Action creators
  const addToWishlist = (product) => {
    // Ensure product has all required properties
    const productWithDefaults = {
      price: 0,
      originalPrice: 0,
      ...product
    };
    
    const callId = Math.random().toString(36).substr(2, 9);
    console.log(`WishlistContext [${callId}]: addToWishlist called with product`, productWithDefaults);
    console.trace(`WishlistContext [${callId}]: addToWishlist call stack`);
    dispatch({
      type: actionTypes.ADD_TO_WISHLIST,
      payload: productWithDefaults,
    });
  };
  
  const removeFromWishlist = (productId) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_WISHLIST,
      payload: productId,
    });
  };
  
  const clearWishlist = () => {
    dispatch({
      type: actionTypes.CLEAR_WISHLIST,
    });
  };
  
  return (
    <WishlistContext.Provider
      value={{
        ...state,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};