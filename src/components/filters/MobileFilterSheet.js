import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Slider } from '@/components/ui/slider.jsx';
import { Label } from '@/components/ui/label.jsx';

const MobileFilterSheet = ({ isOpen, onClose, onFiltersChange, activeFilters = {} }) => {
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
    { id: 'black', label: 'Black', value: '#000000' },
    { id: 'white', label: 'White', value: '#ffffff' },
    { id: 'gray', label: 'Gray', value: '#808080' },
    { id: 'brown', label: 'Brown', value: '#8B4513' },
    { id: 'red', label: 'Red', value: '#FF0000' },
    { id: 'blue', label: 'Blue', value: '#0000FF' },
    { id: 'green', label: 'Green', value: '#008000' },
    { id: 'multi', label: 'Multi', value: 'multi' }
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

  // Apply filters
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
    onClose();
  };

  // Clear all filters
  const clearAllFilters = () => {
    setGender([]);
    setCategory([]);
    setPriceRange([minPrice, maxPrice]);
    setColor([]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-heading">Filters</SheetTitle>
          <SheetDescription className="font-body">
            Refine your product search with these filters
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-4">
          {/* Gender Filter */}
          <div>
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
          <div>
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
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                className="w-full"
              />
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3 font-heading">Color</h3>
            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleColorChange(option.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-200 ${
                    color.includes(option.id) 
                      ? 'border-amber-600 shadow-sm' 
                      : 'border-gray-300 hover:border-amber-300'
                  }`}
                >
                  <div 
                    className="w-6 h-6 rounded-full mb-1 border border-gray-300"
                    style={{ backgroundColor: option.value }}
                  ></div>
                  <span className="text-xs text-gray-700 font-body">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <SheetFooter className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <Button variant="outline" onClick={clearAllFilters} className="w-full py-2 font-body">
            Clear All
          </Button>
          <Button onClick={applyFilters} className="w-full py-2 font-body">
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSheet;