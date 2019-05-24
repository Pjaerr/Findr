import React from 'react';
import PropTypes from 'prop-types';

import SubCategory from '../SubCategory/SubCategory';

import * as Styled from './CategoryStyles';

const Category = ({ name, subCategories }) => {
  return (
    <Styled.MainCategoryContainer>
      <h3>{name}</h3>

      <Styled.SubCategoryContainer>
        <SubCategory showImage={false} displayName="Everything" query={name} />

        {subCategories.map(subCategory => (
          <SubCategory
            showImage={true}
            displayName={subCategory.displayName}
            query={subCategory.query}
          />
        ))}
      </Styled.SubCategoryContainer>
    </Styled.MainCategoryContainer>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired
    })
  )
};

export default Category;
