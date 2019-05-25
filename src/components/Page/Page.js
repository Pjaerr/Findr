import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import * as Styled from './PageStyles';

const Page = ({ children, scrollEnabled, isLoading }) => (
  <Styled.Page>
    <Styled.GloballyInjectedStyles scrollEnabled={scrollEnabled} />
    <Link href="/">
      <a>
        <h2>Findr</h2>
      </a>
    </Link>
    {isLoading ? <Styled.LoadingAnimation /> : children}
  </Styled.Page>
);

Page.defaultProps = {
  scrollEnabled: true,
  isLoading: false
};

Page.propTypes = {
  scrollEnabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default Page;
