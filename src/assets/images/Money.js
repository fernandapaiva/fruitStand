import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Money = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212324"
      strokeLinejoin="round"
      d="M2.25 15.75h19.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75Z"
    />
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 18h18M4.5 20.25h15M12 13.5A3.75 3.75 0 1 0 12 6a3.75 3.75 0 0 0 0 7.5ZM22.5 7.5a3.75 3.75 0 0 1-3.75-3.75M1.5 7.5a3.75 3.75 0 0 0 3.75-3.75M22.5 12a3.75 3.75 0 0 0-3.75 3.75M1.5 12a3.75 3.75 0 0 1 3.75 3.75"
    />
  </Svg>
)
export default Money
