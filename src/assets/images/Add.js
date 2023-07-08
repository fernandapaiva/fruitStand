import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#F0F4F7"
      fillRule="evenodd"
      d="M10 0a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H1a1 1 0 1 1 0-2h8V1a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Add
