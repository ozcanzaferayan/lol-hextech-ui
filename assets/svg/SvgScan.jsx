import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgScan = (props) => (
  <Svg
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 62.5V73h10.5M63 73h10V63M73 12V2H63M12 2H2v10"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgScan;
