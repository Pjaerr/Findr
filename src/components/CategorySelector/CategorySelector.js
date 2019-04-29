import React from 'react';
import Category from '../Category/Category';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
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
