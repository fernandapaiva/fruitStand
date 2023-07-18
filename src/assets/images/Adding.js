import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Adding = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.5.5a.75.75 0 0 1 .75.75v6h6a.75.75 0 0 1 0 1.5h-6v6a.75.75 0 0 1-1.5 0v-6h-6a.75.75 0 0 1 0-1.5h6v-6A.75.75 0 0 1 7.5.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Adding
