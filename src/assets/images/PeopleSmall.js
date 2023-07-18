import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PeopleSmall = (props) => (
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
      d="M18.844 7.875c-.138 1.906-1.552 3.375-3.094 3.375-1.542 0-2.959-1.468-3.094-3.375-.14-1.983 1.236-3.375 3.094-3.375 1.858 0 3.234 1.428 3.094 3.375Z"
    />
    <Path
      stroke="#6C7072"
      strokeMiterlimit={10}
      d="M15.75 14.25c-3.055 0-5.992 1.517-6.728 4.472-.098.391.147.778.549.778H21.93c.401 0 .645-.387.549-.778-.736-3.002-3.674-4.472-6.729-4.472Z"
    />
    <Path
      stroke="#6C7072"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.375 8.716c-.11 1.522-1.253 2.722-2.484 2.722-1.232 0-2.377-1.2-2.485-2.722C4.294 7.132 5.406 6 6.891 6c1.484 0 2.596 1.161 2.484 2.716Z"
    />
    <Path
      stroke="#6C7072"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M9.657 14.344c-.846-.388-1.778-.537-2.766-.537-2.437 0-4.786 1.212-5.374 3.572-.077.312.118.621.44.621h5.262"
    />
  </Svg>
)
export default PeopleSmall
