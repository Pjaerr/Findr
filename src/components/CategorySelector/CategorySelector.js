import React from 'react';
import Category from '../Category/Category';

import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const CategorySelector = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map(category => (
        <Category name={category.name} subCategories={category.subCategories} />
      ))}
    </CategoriesContainer>
  );
};

export default CategorySelector;
