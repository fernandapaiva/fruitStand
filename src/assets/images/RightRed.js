import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RightRed = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#DA0D1E"
      fillRule="evenodd"
      d="M8.33 4.455c.439-.44 1.151-.44 1.59 0l6.75 6.75c.44.439.44 1.151 0 1.59l-6.75 6.75a1.125 1.125 0 0 1-1.59-1.59L14.284 12 8.329 6.045a1.125 1.125 0 0 1 0-1.59Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default RightRed
