import React, { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

const MainCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    margin-bottom: -20px;
  }
`;

const SubCategoryContainer = styled.ul`
  overflow-x: auto;
  display: flex;
  padding: 20px;
  width: 100%;
  white-space: nowrap;
  margin-left: 10px;
  margin-right: 10px;
`;

const SubCategory = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  list-style: none;
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
  return (
    <MainCategoryContainer>
      <h3>{name}</h3>

      <SubCategoryContainer>
        <SubCategory>
          <Link href={{ pathname: '/cards', query: { category: name } }}>
            <a>All</a>
          </Link>
        </SubCategory>
        {subCategories.map(subCategory => (
          <SubCategory>
            <Link href={{ pathname: '/cards', query: { category: subCategory } }}>
              <a>{subCategory}</a>
            </Link>
          </SubCategory>
        ))}
      </SubCategoryContainer>
    </MainCategoryContainer>
  );
};

export default Category;
