import colors from './colors';
import { pxToRem } from '../functions/pxToRem';
const {dark,white} = colors;


const typography = {
    htmlFontSize: 16,
    fontFamily:"",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    
    h1:{
        fontFamily: "Helvetica, sans-serif",
        fontSize: pxToRem(96),
        fontWeight: 300,
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
        color:white
    },
    body1:{
        fontFamily: "Oswald, sans-serif",
        fontSize: pxToRem(16),
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        fontWeight: 400
    },
    body2:{
        fontFamily: "Helvetica, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
        fontWeight: 400
    }

}

export default typography;