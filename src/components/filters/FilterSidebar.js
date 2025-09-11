import React, { useState } from 'react';
import Card from '../Card.js';
import { Slider } from '@/components/ui/slider.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Label } from '@/components/ui/label.jsx';

const FilterSidebar = ({ onFiltersChange, activeFilters = {} }) => {
  // State for filter values
  const [gender, setGender] = useState(activeFilters.gender || []);
  const [category, setCategory] = useState(activeFilters.category || []);
  const [priceRange, setPriceRange] = useState(activeFilters.priceRange || [0, 200]);
  const [color, setColor] = useState(activeFilters.color || []);

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

  // Price range filter options
  const minPrice = 0;
  const maxPrice = 200;

  // Color filter options
  const colorOptions = [
    { id: 'black', label: 'Black', color: '#000000' },
    { id: 'white', label: 'White', color: '#ffffff' },
    { id: 'gray', label: 'Gray', color: '#808080' },
    { id: 'brown', label: 'Brown', color: '#8B4513' },
    { id: 'red', label: 'Red', color: '#FF0000' },
    { id: 'blue', label: 'Blue', color: '#0000FF' },
    { id: 'green', label: 'Green', color: '#008000' },
    { id: 'multi', label: 'Multi', color: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)' }
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

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleColorChange = (colorId) => {
    const newColor = color.includes(colorId)
      ? color.filter(id => id !== colorId)
      : [...color, colorId];
    
    setColor(newColor);
  };

  // Clear all filters
  const applyFilters = () => {
    const newFilters = {
      gender: gender.length > 0 ? gender : undefined,
      category: category.length > 0 ? category : undefined,
      priceRange: priceRange[0] !== minPrice || priceRange[1] !== maxPrice ? priceRange : undefined,
      color: color.length > 0 ? color : undefined
    };
    
    // Remove undefined values
    Object.keys(newFilters).forEach(key => {
      if (newFilters[key] === undefined) {
        delete newFilters[key];
      }
    });
    
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    setGender([]);
    setCategory([]);
    setPriceRange([minPrice, maxPrice]);
    setColor([]);
  };

  return (
    <div className="w-full md:w-64 lg:w-72 pr-4">
      <Card className="p-5 sticky top-4" variant="glass">
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-100">
          <h2 className="text-xl font-heading font-semibold text-gray-900">Filters</h2>
          <button 
            onClick={clearAllFilters}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            Clear All
          </button>
        </div>
        
        <div className="space-y-6">
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-900 mb-3 font-heading">Gender</h3>
          <div className="space-y-2">
            {genderOptions.map(option => (
              <div key={option.id} className="flex items-center">
                <Checkbox
                  id={`gender-${option.id}`}
                  checked={gender.includes(option.id)}
                  onCheckedChange={() => handleGenderChange(option.id)}
                />
                <Label 
                  htmlFor={`gender-${option.id}`} 
                  className="ml-3 text-sm text-gray-700 font-body"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-900 mb-3 font-heading">Category</h3>
          <div className="space-y-2">
            {categoryOptions.map(option => (
              <div key={option.id} className="flex items-center">
                <Checkbox
                  id={`category-${option.id}`}
                  checked={category.includes(option.id)}
                  onCheckedChange={() => handleCategoryChange(option.id)}
                />
                <Label 
                  htmlFor={`category-${option.id}`} 
                  className="ml-3 text-sm text-gray-700 font-body"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h3 className="font-medium text-gray-900 mb-3 font-heading">Price Range</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-body">${priceRange[0]}</span>
              <span className="text-sm text-gray-600 font-body">${priceRange[1]}</span>
            </div>
            <Slider
              min={0}
              max={200}
              step={1}
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3 font-heading">Color</h3>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map(option => (
              <button
                key={option.id}
                onClick={() => handleColorChange(option.id)}
                className={`w-8 h-8 rounded-full border transition-all duration-200 ${
                  color.includes(option.id) 
                    ? 'border-amber-600 shadow-sm ring-2 ring-amber-200' 
                    : 'border-gray-300 hover:border-amber-300'
                }`}
                style={{ backgroundColor: option.color }}
                aria-label={option.label}
              />
            ))}
          </div>
        </div>
      </div>
      </Card>
    </div>
  );
};

export default FilterSidebar;