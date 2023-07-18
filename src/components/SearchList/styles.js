import styled from "styled-components/native";
import { colors } from "../../assets/colors/styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const SearchContainer = styled.View`
  width: ${width - 40}px;
  height: 56px;
  background-color: ${colors.White};
  border-radius: 8px;
  border-width: 1px;
  border-color: transparent;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 10px;
`;

export const SearchText = styled.TextInput`
  padding: 5px;
  width: 90%;
  font-size: 14px;
  color: #363a3c;
  font-family: "Poppins-Regular";
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;
