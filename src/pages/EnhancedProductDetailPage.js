import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Button from '../components/Button.js';
import Rating from '../components/Rating.js';
import Card from '../components/Card.js';
import ProductDetailTabs from '../components/ProductDetailTabs.js';

// Mock product data with enhanced information
const products = [
  {
    id: 1,
    name: 'African Print Dress',
    price: 29.99,
    originalPrice: 39.99,
    image: '/products_and_logo/1000006827.jpg',
    images: [
      '/products_and_logo/1000006827.jpg',
      '/products_and_logo/1000006827.jpg',
      '/products_and_logo/1000006827.jpg'
    ],
    description: 'Beautiful traditional African print dress made from high-quality fabric. Perfect for any occasion.',
    rating: 4.5,
    reviewCount: 128,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inventory: 3,
    category: 'Dresses',
    colors: ['Multi', 'Blue', 'Red'],
    material: '100% Cotton',
    fit: 'True to size'
  },
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg',
    images: [
      '/products_and_logo/1000006833.jpg',
      '/products_and_logo/1000006833.jpg',
      '/products_and_logo/1000006833.jpg'
    ],
    description: 'Handcrafted basket made by skilled artisans using traditional techniques. Great for storage or decoration.',
    rating: 4.8,
    reviewCount: 96,
    sizes: ['One Size'],
    inventory: 8,
    category: 'Home',
    colors: ['Natural'],
    material: 'Natural fibers',
    fit: 'N/A'
  },
  {
    id: 3,
    name: 'Wooden Sculpture',
    price: 19.99,
    originalPrice: 24.99,
    image: '/products_and_logo/1000006880.jpg',
    images: [
      '/products_and_logo/1000006880.jpg',
      '/products_and_logo/1000006880.jpg',
      '/products_and_logo/1000006880.jpg'
    ],
    description: 'Intricately carved wooden sculpture representing African culture and heritage.',
    rating: 4.3,
    reviewCount: 74,
    sizes: ['One Size'],
    inventory: 12,
    category: 'Home',
    colors: ['Brown'],
    material: 'Mahogany wood',
    fit: 'N/A'
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    images: [
      '/products_and_logo/1000006881.jpg',
      '/products_and_logo/1000006881.jpg',
      '/products_and_logo/1000006881.jpg'
    ],
    description: 'Authentic Kente cloth made in Ghana. Each pattern has a special meaning and significance.',
    rating: 4.9,
    reviewCount: 152,
    sizes: ['72" x 48"'],
    inventory: 5,
    category: 'Accessories',
    colors: ['Multi'],
    material: '100% Cotton',
    fit: 'N/A'
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    images: [
      '/products_and_logo/1000006886.jpg',
      '/products_and_logo/1000006886.jpg',
      '/products_and_logo/1000006886.jpg'
    ],
    description: 'Beautiful set of beaded jewelry including necklace, earrings, and bracelet. Handmade with vibrant colors.',
    rating: 4.7,
    reviewCount: 89,
    sizes: ['One Size'],
    inventory: 7,
    category: 'Accessories',
    colors: ['Multi'],
    material: 'Glass beads, Metal',
    fit: 'Adjustable'
  },
  {
    id: 6,
    name: 'Traditional Mask',
    price: 69.99,
    image: '/products_and_logo/1000016728.jpg',
    images: [
      '/products_and_logo/1000016728.jpg',
      '/products_and_logo/1000016728.jpg',
      '/products_and_logo/1000016728.jpg'
    ],
    description: 'Traditional African mask used in ceremonies and cultural events. Made from authentic materials.',
    rating: 4.6,
    reviewCount: 63,
    sizes: ['One Size'],
    inventory: 4,
    category: 'Home',
    colors: ['Brown'],
    material: 'Wood, Paint',
    fit: 'N/A'
  }
];

// Mock related products data
const relatedProducts = [
  {
    id: 2,
    name: 'Handwoven Basket',
    price: 39.99,
    image: '/products_and_logo/1000006833.jpg',
    rating: 4.8,
    reviewCount: 96
  },
  {
    id: 4,
    name: 'Kente Cloth',
    price: 49.99,
    image: '/products_and_logo/1000006881.jpg',
    rating: 4.9,
    reviewCount: 152
  },
  {
    id: 5,
    name: 'Beaded Jewelry Set',
    price: 59.99,
    image: '/products_and_logo/1000006886.jpg',
    rating: 4.7,
    reviewCount: 89
  }
];

// Mock reviews data
const reviews = [
  {
    id: 1,
    userName: 'Amara O.',
    rating: 5,
    date: '2025-08-15',
    comment: 'Absolutely stunning! The quality and craftsmanship are exceptional. I received so many compliments when I wore it to the cultural event.',
    verified: true
  },
  {
    id: 2,
    userName: 'Kwame A.',
    rating: 4,
    date: '2025-08-10',
    comment: 'Beautiful dress with vibrant colors. The fabric is comfortable and breathable. Size was true to fit.',
    verified: true
  },
  {
    id: 3,
    userName: 'Zara M.',
    rating: 5,
    date: '2025-08-05',
    comment: 'This dress is a work of art! The African print is so unique and eye-catching. I love how it celebrates culture and heritage.',
    verified: false
  }
];

function EnhancedProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showZoom, setShowZoom] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar showBackButton={true} />
        <div className="flex-grow p-6 bg-gray-50 min-h-screen">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <div className="text-center">
            <Button 
              variant="primary" 
              onClick={() => navigate('/products')}
            >
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    const productToAdd = {
      ...product,
      selectedSize,
      quantity
    };
    
    addToCart(productToAdd);
    // Show success message or redirect to cart
    alert(`${product.name} added to cart!`);
  };

  const handleImageClick = () => {
    setShowZoom(!showZoom);
  };

  const handleShare = (platform) => {
    // In a real implementation, this would integrate with social platforms
    alert(`Sharing ${product.name} on ${platform}`);
  };

  // Frequently Bought Together products (mock data)
  const frequentlyBoughtTogether = relatedProducts.slice(0, 2);
  
  // Complete the Look products (mock data)
  const completeTheLook = relatedProducts.slice(1, 3);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar showBackButton={true} />
      
      {/* Breadcrumb */}
      <div className="bg-white py-3 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/products" className="text-gray-500 hover:text-gray-700">Products</a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 truncate max-w-xs">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Gallery and Info */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <div className="flex flex-col-reverse">
              {/* Image grid */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-amber-500 ${selectedImage === index ? 'ring-2 ring-amber-500' : ''}`}
                    >
                      <span className="sr-only">Image {index + 1}</span>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Product view ${index + 1}`} 
                          className="w-full h-full object-contain"
                        />
                      </span>
                      <span
                        className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${selectedImage === index ? 'ring-amber-500' : 'ring-transparent'}`}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Main image */}
              <div className="w-full aspect-w-1 aspect-h-1">
                <div 
                  className="w-full h-96 sm:h-[32rem] lg:h-[36rem] bg-white rounded-lg overflow-hidden cursor-zoom-in"
                  onClick={handleImageClick}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {showZoom && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                      <div className="relative max-w-4xl max-h-full">
                        <button 
                          onClick={() => setShowZoom(false)}
                          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <img
                          src={product.images[selectedImage]}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-light tracking-tight text-gray-900">{product.name}</h1>
              
              <div className="mt-3">
                <Rating value={product.rating} count={product.reviewCount} />
              </div>
              
              {/* Price */}
              <div className="mt-4">
                <div className="flex items-center">
                  <p className="text-3xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <p className="ml-4 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                  )}
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="mt-1 text-sm text-green-600">
                    Save ${(product.originalPrice - product.price).toFixed(2)} ({Math.round((1 - product.price / product.originalPrice) * 100)}% off)
                  </p>
                )}
              </div>
              
              {/* Inventory scarcity indicator */}
              {product.inventory <= 5 && (
                <div className="mt-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-2 text-sm text-red-600">
                    Only {product.inventory} left in stock - order soon
                  </p>
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700">{product.description}</p>
              </div>
              
              <form className="mt-6">
                {/* Size selection */}
                <div>
                  <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                  <div className="mt-2 flex items-center">
                    <div className="grid grid-cols-5 gap-2 sm:grid-cols-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 border rounded-md text-sm font-medium uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                            selectedSize === size
                              ? 'bg-amber-500 border-amber-500 text-white'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSizeGuide(true)}
                      className="ml-4 text-sm font-medium text-amber-600 hover:text-amber-500"
                    >
                      Size guide
                    </button>
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="mt-6">
                  <h3 className="text-sm text-gray-900 font-medium">Quantity</h3>
                  <div className="mt-2 flex items-center">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-gray-300 rounded-l-md bg-white text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      <span className="sr-only">Decrease quantity</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                      className="w-16 border-y border-gray-300 text-center bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="p-2 border border-gray-300 rounded-r-md bg-white text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      <span className="sr-only">Increase quantity</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Add to cart button */}
                <div className="mt-6">
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={handleAddToCart}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
                
                {/* Social sharing */}
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-900">Share</h3>
                  <div className="mt-3 flex space-x-4">
                    <button
                      onClick={() => handleShare('Facebook')}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('Twitter')}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleShare('Pinterest')}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Share on Pinterest</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Product details tabs */}
          <div className="mt-16">
            <ProductDetailTabs product={product} reviews={reviews} />
          </div>
          
          {/* Frequently Bought Together */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-light tracking-tight text-gray-900">Frequently Bought Together</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {frequentlyBoughtTogether.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`/product/${item.id}`}>
                          <span className="absolute inset-0" />
                          {item.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Accessories</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      <Rating value={item.rating} size="sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Complete the Look */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-light tracking-tight text-gray-900">Complete the Look</h2>
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {completeTheLook.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`/product/${item.id}`}>
                          <span className="absolute inset-0" />
                          {item.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Accessories</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      <Rating value={item.rating} size="sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900">Size Guide</h3>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest (in)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (in)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hips (in)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XS</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32-34</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25-27</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34-36</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35-37</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28-30</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">37-39</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38-40</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31-33</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">40-42</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">41-43</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34-36</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">43-45</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">44-46</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">37-39</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">46-48</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6">
                  <h4 className="text-md font-medium text-gray-900">Fit Information</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    This product has a regular fit. We recommend choosing your usual size. 
                    If you're between sizes, we recommend sizing up for a more comfortable fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnhancedProductDetailPage;