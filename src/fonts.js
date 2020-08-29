import nunitoSans300Eot from "./fonts/nunito-sans-v5-latin-300.eot";
import nunitoSans300Woff2 from "./fonts/nunito-sans-v5-latin-300.woff2";
import nunitoSans300Woff from "./fonts/nunito-sans-v5-latin-300.woff";
import nunitoSans300Ttf from "./fonts/nunito-sans-v5-latin-300.ttf";
import nunitoSans300Svg from "./fonts/nunito-sans-v5-latin-300.svg";

import nunitoSans600Eot from "./fonts/nunito-sans-v5-latin-600.eot";
import nunitoSans600Woff2 from "./fonts/nunito-sans-v5-latin-600.woff2";
import nunitoSans600Woff from "./fonts/nunito-sans-v5-latin-600.woff";
import nunitoSans600Ttf from "./fonts/nunito-sans-v5-latin-600.ttf";
import nunitoSans600Svg from "./fonts/nunito-sans-v5-latin-600.svg";

import nunitoSans800Eot from "./fonts/nunito-sans-v5-latin-800.eot";
import nunitoSans800Woff2 from "./fonts/nunito-sans-v5-latin-800.woff2";
import nunitoSans800Woff from "./fonts/nunito-sans-v5-latin-800.woff";
import nunitoSans800Ttf from "./fonts/nunito-sans-v5-latin-800.ttf";
import nunitoSans800Svg from "./fonts/nunito-sans-v5-latin-800.svg";

const nunitoSans300 = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 300,
  src: `url('${nunitoSans300Eot}'),
        local('Nunito Sans Light'), local('NunitoSans-Light'),
        url('${nunitoSans300Eot}?#iefix') format('embedded-opentype'),
        url('${nunitoSans300Woff2}') format('woff2'),
        url('${nunitoSans300Woff}') format('woff'),
        url('${nunitoSans300Ttf}') format('truetype'),
        url('${nunitoSans300Svg}#NunitoSans') format('svg'); 
  `,
};

const nunitoSans600 = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 600,
  src: `url('${nunitoSans600Eot}'),
        local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'),
        url('${nunitoSans600Eot}?#iefix') format('embedded-opentype'),
        url('${nunitoSans600Woff2}') format('woff2'),
        url('${nunitoSans600Woff}') format('woff'),
        url('${nunitoSans600Ttf}') format('truetype'),
        url('${nunitoSans600Svg}#NunitoSans') format('svg'); 
  `,
};

const nunitoSans800 = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 800,
  src: `url('${nunitoSans800Eot}'),
        local('Nunito Sans ExtraBold'), local('NunitoSans-ExtraBold'),
        url('${nunitoSans800Eot}?#iefix') format('embedded-opentype'),
        url('${nunitoSans800Woff2}') format('woff2'),
        url('${nunitoSans800Woff}') format('woff'),
        url('${nunitoSans800Ttf}') format('truetype'),
        url('${nunitoSans800Svg}#NunitoSans') format('svg'); 
  `,
};

export { nunitoSans300, nunitoSans600, nunitoSans800 };
