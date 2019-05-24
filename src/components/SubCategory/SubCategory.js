import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import * as Styled from './SubCategoryStyles';

const SubCategory = ({ showImage, displayName, query }) => {
  return (
    <Styled.SubCategoryListItem
      showImage={showImage}
      image={`/static/category-images/${query.replace(' ', '_')}.jpg`}
    >
      <Link href={{ pathname: '/cards', query: { category: query } }}>
        <a>{displayName}</a>
      </Link>
    </Styled.SubCategoryListItem>
  );
};

SubCategory.propTypes = {
  showImage: PropTypes.bool.isRequired,
  displayName: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired
};

export default SubCategory;
