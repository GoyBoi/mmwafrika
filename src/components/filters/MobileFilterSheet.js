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

const MobileFilterSheet = ({ isOpen, onClose, onFiltersChange, activeFilters }) => {
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

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
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

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your product search with these filters
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-6">
          {/* Gender Filter */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Gender</h3>
            <div className="space-y-2">
              {genderOptions.map(option => (
                <div key={option.id} className="flex items-center">
                  <Checkbox
                    id={`mobile-gender-${option.id}`}
                    checked={gender.includes(option.id)}
                    onCheckedChange={() => handleGenderChange(option.id)}
                  />
                  <Label 
                    htmlFor={`mobile-gender-${option.id}`} 
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option.label}
                  </Label>
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
                  <Checkbox
                    id={`mobile-category-${option.id}`}
                    checked={category.includes(option.id)}
                    onCheckedChange={() => handleCategoryChange(option.id)}
                  />
                  <Label 
                    htmlFor={`mobile-category-${option.id}`} 
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option.label}
                  </Label>
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
        
        <SheetFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={clearAllFilters} className="w-full">
            Clear All
          </Button>
          <Button onClick={applyFilters} className="w-full">
            Apply Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSheet;