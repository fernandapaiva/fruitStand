import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Cash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#008C21"
      strokeLinejoin="round"
      d="M1.5 10.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 3v7a.5.5 0 0 0 .5.5Z"
    />
    <Path
      stroke="#008C21"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 12h12M3 13.5h10M8 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 5a2.5 2.5 0 0 1-2.5-2.5M1 5a2.5 2.5 0 0 0 2.5-2.5M15 8a2.5 2.5 0 0 0-2.5 2.5M1 8a2.5 2.5 0 0 1 2.5 2.5"
    />
  </Svg>
)
export default Cash
