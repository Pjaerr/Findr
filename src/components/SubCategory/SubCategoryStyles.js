import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const SubCategoryListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 5px;

  font-weight: bold;

  height: 60px;
  width: 180px;
  min-width: 180px;

  ${({ showImage, image }) =>
    showImage &&
    `
    background-image: linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.7)),
    url(${image});
  `}
  
  background-color: ${GlobalStyles.secondaryBackgroundColour};

  background-size: cover;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: ${props => (props.showImage ? GlobalStyles.backgroundColour : GlobalStyles.textColour)};
    padding: 20px;
  }

  transition: transform 0.2s ease;

  :hover {
    transform: translateY(-5px);
  }
`;
