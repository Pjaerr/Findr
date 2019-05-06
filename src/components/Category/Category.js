import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

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

const SubCategory = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 5px;

  height: 80px;
  width: 200px;
  min-width: 200px;

  ${({ image }) =>
    image &&
    `
    background-image: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url(${image});
  `}
  
  background-color: ${GlobalStyles.secondaryBackgroundColour};

  background-size: cover;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: ${props => (props.image ? GlobalStyles.backgroundColour : GlobalStyles.textColour)};
    padding: 20px;
  }

  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-5px);
  }
`;

const Category = ({ name, subCategories }) => {
  return (
    <MainCategoryContainer>
      <h3>{name}</h3>

      <SubCategoryContainer>
        <SubCategory>
          <Link href={{ pathname: '/cards', query: { category: name } }}>
            <a>Everything</a>
          </Link>
        </SubCategory>
        {subCategories.map(subCategory => (
          <SubCategory image={`/static/category-images/${subCategory.query.replace(' ', '_')}.jpg`}>
            <Link href={{ pathname: '/cards', query: { category: subCategory.query } }}>
              <a>{subCategory.displayName}</a>
            </Link>
          </SubCategory>
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
