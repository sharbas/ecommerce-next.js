// contexts/categoryContext.js
import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleCategoryChange }}>
      {children}
    </CategoryContext.Provider>
  );
};

