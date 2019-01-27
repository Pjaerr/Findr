import styled from 'styled-components';
import GlobalStyles from '../../../GlobalStyles';

export const CardContainer = styled.div`
    background: ${GlobalStyles.secondaryBackgroundColour};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);

    max-width: 500px;
    max-height: 800px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */

    cursor: -webkit-grab;
`;

export const CardContent = styled.div`
    padding: 20px;

    padding-bottom: 30px;
`;

export const CardImage = styled.div`
    width: 500px;
    height: 400px;
    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: center center;
`;