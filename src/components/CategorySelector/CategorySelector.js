import React from 'react';
import PropTypes from 'prop-types';

import Category from '../Category/Category';

import * as Styled from './CategorySelectorStyles';

const CategorySelector = ({ categories }) => {
  return (
    <Styled.CategoriesContainer>
      {categories.map(category => (
        <Category name={category.name} subCategories={category.subCategories} />
      ))}
    </Styled.CategoriesContainer>
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
