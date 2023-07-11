import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Trash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.25 5.25.938 15c.044.867.675 1.5 1.5 1.5h8.625c.828 0 1.447-.633 1.5-1.5l.937-15"
    />
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M3.75 5.25h16.5"
    />
    <Path
      stroke="#212324"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5.25V3.375a1.122 1.122 0 0 1 1.125-1.125h3.75A1.122 1.122 0 0 1 15 3.375V5.25M12 8.25v10.5M8.625 8.25 9 18.75M15.375 8.25 15 18.75"
    />
  </Svg>
)
export default Trash
