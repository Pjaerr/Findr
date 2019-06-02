import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const MainCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h3 {
    margin-bottom: -10px;
    border-bottom: 0.25px solid ${GlobalStyles.lightTextColour};
  }
`;

export const SubCategoryContainer = styled.ul`
  overflow-x: auto;
  display: flex;
  padding: 20px;
  width: 90%;
  white-space: nowrap;
  margin-right: 10px;
`;
