import { createGlobalStyle } from 'styled-components';

import Roboto300Ttf from './Roboto-Light.ttf';
import Roboto400Ttf from './Roboto-Regular.ttf';
import Roboto500Ttf from './Roboto-Medium.ttf';
import Roboto700Ttf from './Roboto-Bold.ttf';

const RobotoFontFace = createGlobalStyle`
    /* roboto-300 */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src: url('${Roboto300Ttf}');
    }

    /* roboto-400 */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('${Roboto400Ttf}');
    }

    /* roboto-500 */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        src: url('${Roboto500Ttf}');
    }
    
    /* roboto-500 */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        src: url('${Roboto700Ttf}');
    }
`;

export default RobotoFontFace;