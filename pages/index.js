import React from 'react';

import Page from '../src/components/Page/Page';
import CategorySelector from '../src/components/CategorySelector/CategorySelector';

const categories = [
  {
    name: 'Attractions',
    subCategories: [
      { displayName: 'Museums', query: 'Museums' },
      { displayName: 'Theme Parks', query: 'Theme Parks' },
      { displayName: 'Historic', query: 'Historic' },
      { displayName: 'Art', query: 'Art' },
      { displayName: 'Theatre', query: 'Theatre' },
      { displayName: 'Zoos', query: 'Zoos' }
    ]
  },
  {
    name: 'Sights',
    subCategories: [
      { displayName: 'Landmarks', query: 'Landmarks' },
      { displayName: 'Lakes', query: 'Lakes' },
      { displayName: 'Parks', query: 'Parks' },
      { displayName: 'City Views', query: 'City Views' }
    ]
  },
  {
    name: 'Social',
    subCategories: [
      { displayName: 'Nightlife', query: 'Nightlife' },
      { displayName: 'Pubs', query: 'Pubs' },
      { displayName: 'Sports', query: 'Sports' },
      { displayName: 'Community', query: 'Community' }
    ]
  },
  {
    name: 'Food',
    subCategories: [
      { displayName: 'Chinese', query: 'Chinese Food' },
      { displayName: 'American', query: 'American Food' },
      { displayName: 'German', query: 'German Food' },
      { displayName: 'Spanish', query: 'Spanish Food' },
      { displayName: 'Vietnamese', query: 'Vietnamese Food' },
      { displayName: 'Thai', query: 'Thai Food' },
      { displayName: 'Indian', query: 'Indian Food' },
      { displayName: 'Japanese', query: 'Japanese Food' }
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
