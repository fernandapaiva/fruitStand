import styled from "styled-components/native";
import { colors } from "../../assets/colors/styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.Black};
  opacity: 0.95;
`;

export const ContainerInside = styled.View`
  background-color: ${colors.White};
  width: ${width - 50}px;
  height: 240px;
  border-radius: 8px;
  padding: 20px;
`;

export const Separator16 = styled.View`
  height: 16px;
`;

export const Separator5 = styled.View`
  height: 5px;
`;

export const TitleAlert = styled.Text`
  font-size: 24px;
  font-family: "Poppins-Regular";
  color: ${colors.Red};
`;

export const Description = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Regular";
  color: ${colors.DarkGray};
  line-height: 24px;
  text-align: justify;
`;

export const AlertButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
  width: 132px;
  height: 40px;
  background-color: ${colors.White};
  border-width: 1px;
  border-color: ${colors.Red};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const ButtonRed = styled.TouchableOpacity`
  width: 132px;
  height: 40px;
  background-color: ${colors.Red};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const TitleAlertRed = styled.Text`
  font-size: 13px;
  font-family: "Poppins-Medium";
  color: ${colors.Red};
`;

export const TitleAlerWhite = styled.Text`
  font-size: 13px;
  font-family: "Poppins-Medium";
  color: ${colors.White};
`;
