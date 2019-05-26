import React from 'react';
import PropTypes from 'prop-types';

//Components
import Category from '../Category/Category';

//Styles
import * as Styled from './CategorySelectorStyles';

const CategorySelector = ({ categories }) => {
  return (
    <Styled.CategoriesContainer>
      {categories.map(category => (
        <Category key={category.name} name={category.name} subCategories={category.subCategories} />
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
