import React from 'react';

import Link from 'next/link';

import Page from '../src/components/Page/Page';

const index = () => {
  return (
    <Page>
      <Link href={{ pathname: '/cards', query: { category: 'attractions' } }}>Click me</Link>
    </Page>
  );
};

export default index;
