import React, { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

const MainCategoryContainer = styled.div`
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

    transition: transform 0.2s ease;

    :hover {
      transform: translateY(-5px);
    }
  }
`;

const Arrow = styled.i`
  border: solid ${GlobalStyles.textColour};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  margin-left: -15px;
  transition: transform 0.25s ease;
  transform: rotate(${props => props.angle});
`;

const SubCategoryContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
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
    <React.Fragment>
      <MainCategoryContainer>
        <button
          onClick={() => {
            setShowSubCategories(!showSubCategories);
          }}
        >
          {name}
        </button>

        <Arrow angle={showSubCategories ? '45deg' : '-45deg'} />
      </MainCategoryContainer>

      <SubCategoryContainer visible={showSubCategories}>
        {subCategories.map(subCategory => (
          <SubCategory>
            <Link href={{ pathname: '/cards', query: { category: subCategory } }}>
              <a>{subCategory}</a>
            </Link>
          </SubCategory>
        ))}
      </SubCategoryContainer>
    </React.Fragment>
  );
};

export default Category;
