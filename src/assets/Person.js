import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Person = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#6C7072"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.125 6.75c-.184 2.478-2.063 4.5-4.126 4.5-2.062 0-3.944-2.021-4.124-4.5-.188-2.578 1.64-4.5 4.124-4.5 2.485 0 4.313 1.969 4.126 4.5Z"
    />
    <Path
      stroke="#6C7072"
      strokeMiterlimit={10}
      d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"
    />
  </Svg>
)
export default Person
