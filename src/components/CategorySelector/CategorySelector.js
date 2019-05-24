import React from 'react';
import PropTypes from 'prop-types';

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

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      subCategories: PropTypes.arrayOf(
        PropTypes.shape({
          displayName: PropTypes.string.isRequired,
          query: PropTypes.string.isRequired
        })
      )
    })
  )
};

export default CategorySelector;
