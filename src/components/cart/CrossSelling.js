import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useCart } from '../../context/CartContext.js';

// Mock data for product recommendations
// In a real application, this would come from an API or recommendation engine
const mockRecommendations = [
  {
    id: 101,
    name: 'Matching Headwrap',
    price: 19.99,
    image: '/products_and_logo/1000006827.jpg',
    category: 'accessories',
    description: 'Perfect complement to your African print dress'
  },
  {
    id: 102,
    name: 'Traditional Sandals',
    price: 29.99,
    image: '/products_and_logo/1000006833.jpg',
    category: 'footwear',
    description: 'Handcrafted leather sandals with authentic design'
  },
  {
    id: 103,
    name: 'Wooden Jewelry Box',
    price: 39.99,
    image: '/products_and_logo/1000006880.jpg',
    category: 'home',
    description: 'Beautifully carved wooden box for your accessories'
  },
  {
    id: 104,
    name: 'African Art Print',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    category: 'home',
    description: 'Framed art print celebrating African heritage'
  }
];

const CrossSelling = ({ onAddToCart, onViewProduct }) => {
  const { cartItems } = useCart();
  
  // Check if an item is already in the cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // In a real application, we would generate recommendations based on cart items
  // For now, we'll just show the mock recommendations
  const recommendations = mockRecommendations;

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Bought Together</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
          >
            <div 
              className="relative h-48 bg-gray-100 cursor-pointer"
              onClick={() => onViewProduct(item.id)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h4 
                className="font-medium text-gray-900 mb-1 cursor-pointer hover:text-amber-600 transition-colors"
                onClick={() => onViewProduct(item.id)}
              >
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{item.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-3">${item.price.toFixed(2)}</p>
              <Button
                onClick={() => onAddToCart(item)}
                disabled={isInCart(item.id)}
                className="w-full"
                variant={isInCart(item.id) ? "secondary" : "default"}
              >
                {isInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CrossSelling;