import React from 'react';

import Page from '../src/components/Page/Page';
import CategorySelector from '../src/components/CategorySelector/CategorySelector';

const categories = [
  {
    name: 'Attractions',
    subCategories: ['Museums', 'Historic']
  },
  {
    name: 'Sights',
    subCategories: ['Landmarks', 'Nature']
  },
  {
    name: 'Food',
    subCategories: ['Chinese Food', 'American Food']
  }
];

const index = () => {
  return (
    <Page>
      <CategorySelector categories={categories} />
    </Page>
  );
};

export default index;
