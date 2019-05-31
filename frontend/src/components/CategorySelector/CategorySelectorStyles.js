import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${GlobalStyles.breakpoints.small}) {
    width: 80%;
  }
`;
