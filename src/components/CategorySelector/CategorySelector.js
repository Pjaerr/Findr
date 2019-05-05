import React from 'react';
import Category from '../Category/Category';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${GlobalStyles.breakpoints.small}) {
    width: 80%;
  }
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
