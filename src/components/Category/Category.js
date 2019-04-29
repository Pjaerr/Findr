import React, { useState } from 'react';

import Link from 'next/link';

import styled from 'styled-components';

const CategoryWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  outline: 1px solid black;
`;

const SubCategoryContainer = styled.div`
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
`;

const SubCategory = styled.div`
  padding: 10px;
  margin: 5px;
  outline: 1px solid black;
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
