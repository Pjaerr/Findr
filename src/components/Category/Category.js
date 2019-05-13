import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

import SubCategory from '../SubCategory/SubCategory';

const MainCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h3 {
    margin-bottom: -10px;
    border-bottom: 0.25px solid ${GlobalStyles.lightTextColour};
  }
`;

const SubCategoryContainer = styled.ul`
  overflow-x: auto;
  display: flex;
  padding: 20px;
  width: 90%;
  white-space: nowrap;
  margin-right: 10px;
`;

const Category = ({ name, subCategories }) => {
  return (
    <MainCategoryContainer>
      <h3>{name}</h3>

      <SubCategoryContainer>
        <SubCategory showImage={false} displayName="Everything" query={name} />

        {subCategories.map(subCategory => (
          <SubCategory
            showImage={true}
            displayName={subCategory.displayName}
            query={subCategory.query}
          />
        ))}
      </SubCategoryContainer>
    </MainCategoryContainer>
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
