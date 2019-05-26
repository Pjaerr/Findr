import React from 'react';

import Page from '../Page/Page';

import styled from 'styled-components';

const ShrugIcon = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Message = styled.b`
  text-align: center;
  max-width: 90%;
`;

const NotFoundError = ({ message }) => {
  return (
    <Page>
      <ShrugIcon role="img" aria-label="Emoji of a woman shrugging">
        🤷
      </ShrugIcon>

      <Message>{message}</Message>
    </Page>
  );
};

export default NotFoundError;
