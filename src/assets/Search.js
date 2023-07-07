import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#363A3C"
      fillRule="evenodd"
      d="M5.856 3.617a8.114 8.114 0 0 1 4.508-1.367v.754-.754a8.114 8.114 0 0 1 8.113 8.114A8.114 8.114 0 1 1 5.856 3.617Zm4.508.133a6.614 6.614 0 0 1 6.613 6.614M10.363 3.75a6.614 6.614 0 1 0 6.614 6.614"
      clipRule="evenodd"
    />
    <Path
      fill="#363A3C"
      fillRule="evenodd"
      d="M15.327 15.327a.75.75 0 0 1 1.06 0l5.143 5.143a.75.75 0 1 1-1.06 1.06l-5.143-5.142a.75.75 0 0 1 0-1.061Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Search
