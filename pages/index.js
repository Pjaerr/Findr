import React from 'react';

import Page from '../src/components/Page/Page';
import CategorySelector from '../src/components/CategorySelector/CategorySelector';

const categories = [
  {
    name: 'Attractions',
    subCategories: [
      { displayName: 'Museums', query: 'Museums' },
      { displayName: 'Historic', query: 'Historic' }
    ]
  },
  {
    name: 'Sights',
    subCategories: [
      { displayName: 'Landmarks', query: 'Landmarks' },
      { displayName: 'Nature', query: 'Nature' }
    ]
  },
  {
    name: 'Food',
    subCategories: [
      { displayName: 'Chinese', query: 'Chinese Food' },
      { displayName: 'American', query: 'American Food' },
      { displayName: 'German', query: 'German Food' },
      { displayName: 'Spanish', query: 'Spanish Food' }
    ]
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
