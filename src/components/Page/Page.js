import React from 'react';

import Link from 'next/link';

import * as Styled from './PageStyles';

const Page = ({ children }) => (
  <Styled.Page>
    <Styled.GloballyInjectedStyles />
    <Link href="/">
      <a>
        <h2>Findr</h2>
      </a>
    </Link>
    {children}
  </Styled.Page>
);

export default Page;
