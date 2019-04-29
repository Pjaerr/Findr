import React, { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

const CategoryWrapper = styled.div`
  button {
    display: inline-block;
    border: none;
    padding-right: 2rem;
    padding-bottom: 1rem;
    margin: 0;
    text-decoration: none;
    background: none;
    font-size: 1.5em;
    cursor: pointer;
    text-align: center;
  }

  margin-bottom: 20px;
`;

const Arrow = styled.i`
  border: solid ${GlobalStyles.textColour};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  margin-left: -15px;
  transition: transform 0.25s ease;
  transform: rotate(${props => props.angle});
  align-self: center;
`;

const SubCategoryContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-wrap: wrap;

  width: 100%;
`;

const SubCategory = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 5px;

  background: ${GlobalStyles.secondaryBackgroundColour};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: ${GlobalStyles.textColour};
    padding: 20px;
  }

  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-5px);
  }
`;

const Category = ({ name, subCategories }) => {
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <CategoryWrapper>
      <button
        onClick={() => {
          setShowSubCategories(!showSubCategories);
        }}
      >
        {name}
      </button>

      <Arrow angle={showSubCategories ? '45deg' : '-45deg'} />

      <SubCategoryContainer visible={showSubCategories}>
        {subCategories.map(subCategory => (
          <SubCategory>
            <Link href={{ pathname: '/cards', query: { category: subCategory } }}>
              <a>{subCategory}</a>
            </Link>
          </SubCategory>
        ))}
      </SubCategoryContainer>
    </CategoryWrapper>
  );
};

export default Category;
