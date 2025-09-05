import React, { useState } from 'react';
import Card from '../Card.js';

const MobileFilterModal = ({ isOpen, onClose, onFiltersChange, activeFilters }) => {
  // State for filter values
  const [gender, setGender] = useState(activeFilters.gender || []);
  const [category, setCategory] = useState(activeFilters.category || []);
  const [priceRange, setPriceRange] = useState(activeFilters.priceRange || [0, 200]);
  const [color, setColor] = useState(activeFilters.color || []);
  const [size, setSize] = useState(activeFilters.size || []);

  // Gender filter options
  const genderOptions = [
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'unisex', label: 'Unisex' },
    { id: 'kids', label: 'Kids' },
    { id: 'babies', label: 'Babies' }
  ];

  // Category filter options
  const categoryOptions = [
    { id: 'tops', label: 'Tops' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'home', label: 'Home' }
  ];

  // Color filter options
  const colorOptions = [
    { id: 'black', label: 'Black', color: '#000000' },
    { id: 'white', label: 'White', color: '#ffffff' },
    { id: 'red', label: 'Red', color: '#ef4444' },
    { id: 'blue', label: 'Blue', color: '#3b82f6' },
    { id: 'green', label: 'Green', color: '#22c55e' },
    { id: 'yellow', label: 'Yellow', color: '#eab308' },
    { id: 'orange', label: 'Orange', color: '#f97316' },
    { id: 'purple', label: 'Purple', color: '#a855f7' },
    { id: 'pink', label: 'Pink', color: '#ec4899' },
    { id: 'brown', label: 'Brown', color: '#a16207' },
    { id: 'gray', label: 'Gray', color: '#6b7280' }
  ];

  // Size filter options
  const sizeOptions = [
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
    { id: 'm', label: 'M' },
    { id: 'l', label: 'L' },
    { id: 'xl', label: 'XL' },
    { id: 'xxl', label: 'XXL' },
    { id: 'xxxl', label: 'XXXL' }
  ];

  // Handle filter changes
  const handleGenderChange = (genderId) => {
    const newGender = gender.includes(genderId)
      ? gender.filter(id => id !== genderId)
      : [...gender, genderId];
    
    setGender(newGender);
  };

  const handleCategoryChange = (categoryId) => {
    const newCategory = category.includes(categoryId)
      ? category.filter(id => id !== categoryId)
      : [...category, categoryId];
    
    setCategory(newCategory);
  };

  const handleColorChange = (colorId) => {
    const newColor = color.includes(colorId)
      ? color.filter(id => id !== colorId)
      : [...color, colorId];
    
    setColor(newColor);
  };

  const handleSizeChange = (sizeId) => {
    const newSize = size.includes(sizeId)
      ? size.filter(id => id !== sizeId)
      : [...size, sizeId];
    
    setSize(newSize);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
  };

  // Apply filters
  const applyFilters = () => {
    onFiltersChange({
      gender,
      category,
      priceRange,
      color,
      size
    });
    onClose();
  };

  // Clear all filters
  const clearAllFilters = () => {
    setGender([]);
    setCategory([]);
    setPriceRange([0, 200]);
    setColor([]);
    setSize([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <button 
                onClick={clearAllFilters}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-6">
              {/* Gender Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Gender</h3>
                <div className="space-y-2">
                  {genderOptions.map(option => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-gender-${option.id}`}
                        checked={gender.includes(option.id)}
                        onChange={() => handleGenderChange(option.id)}
                        className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label 
                        htmlFor={`mobile-gender-${option.id}`} 
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map(option => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-category-${option.id}`}
                        checked={category.includes(option.id)}
                        onChange={() => handleCategoryChange(option.id)}
                        className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label 
                        htmlFor={`mobile-category-${option.id}`} 
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">${priceRange[0]}</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                    <span className="text-sm text-gray-600">Max: $200</span>
                  </div>
                  <div className="relative pt-1">
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      value={priceRange[1]} 
                      onChange={(e) => handlePriceRangeChange(priceRange[0], parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleColorChange(option.id)}
                      className={`w-8 h-8 rounded-full border-2 ${color.includes(option.id) ? 'border-amber-600' : 'border-gray-300'}`}
                      style={{ backgroundColor: option.color }}
                      aria-label={option.label}
                    />
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleSizeChange(option.id)}
                      className={`px-3 py-1 text-sm rounded-md border ${
                        size.includes(option.id) 
                          ? 'bg-amber-600 text-white border-amber-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={applyFilters}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterModal;