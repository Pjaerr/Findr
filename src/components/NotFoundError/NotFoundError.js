import React from 'react';

//Global Page Container
import Page from '../Page/Page';

//Styles
import * as Styled from './NotFoundErrorStyles';

const NotFoundError = ({ message }) => {
  return (
    <Page>
      <Styled.ShrugIcon role="img" aria-label="Emoji of a woman shrugging">
        🤷
      </Styled.ShrugIcon>

      <Styled.Message>{message}</Styled.Message>
    </Page>
  );
};

export default NotFoundError;
