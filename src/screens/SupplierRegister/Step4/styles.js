import styled from "styled-components/native";
import { colors } from "../../../assets/colors/styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Backgroud};
  padding-horizontal: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const Separator40 = styled.View`
  height: 40px;
`;

export const Separator24 = styled.View`
  height: 24px;
`;

export const Separator16 = styled.View`
  height: 8px;
`;

export const LiningContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LayoutOld = styled.Text`
  font-size: 13px;
  color: ${colors.Black};
  font-family: "Poppins-Medium";
`;

export const LayoutCurrent = styled.Text`
  font-size: 13px;
  color: ${colors.Red};
  font-family: "Poppins-Medium";
`;

export const Label = styled.Text`
  font-size: 15px;
  color: ${colors.DarkGray};
  font-family: "Poppins-Regular";
`;

export const ButtonCheckBoxAll = styled.TouchableOpacity`
  flex-direction: row;
`;

export const BackgroundFruits = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 8px;
  margin: 8px;
`;

export const FullText = styled.Text`
  font-size: 16px;
  color: ${colors.Black};
  font-family: "Poppins-Regular";
  margin-left: 8px;
`;

export const ViewButton = styled.View`
  width: 100%;
  bottom: 40px;
  left: 10px;
  right: 0;
  position: absolute;
`;
