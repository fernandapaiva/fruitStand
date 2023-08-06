import styled from "styled-components/native";
import { colors } from "../../assets/colors/styles";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.Backgroud};
  align-items: center;
  justify-content: center;
`;

export const TitleRegistration = styled.Text`
  font-size: 16px;
  color: ${colors.Black};
  align-self: flex-start;
  margin-left: 20px;
  font-family: "Poppins-Regular";
`;

export const Separator40 = styled.View`
  height: 40px;
`;

export const ViewButton = styled.View`
  width: 100%;
  margin-bottom: 20px;
  left: 12px;
`;

////////////////////////////////////

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Backgroud};
`;

export const Separator24 = styled.View`
  height: 24px;
`;

export const Separator15 = styled.View`
  height: 15px;
`;

export const SeparatorItens = styled.View`
  width: 8px;
`;

export const Separator8 = styled.View`
  height: 10px;
`;

export const Separator48 = styled.View`
  height: 48px;
`;

export const Separator16 = styled.View`
  height: 16px;
`;

export const Main = styled.View`
  align-items: center;
`;

export const ContainerInformation = styled.TouchableOpacity`
  width: ${width - 40}px;
  height: 120px;
  background-color: ${colors.White};
  border-radius: 8px;
  padding: 15px;
`;

export const LiningUp = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DataSupplier = styled.Text`
  font-size: 13px;
  color: ${colors.Gray};
  font-family: "Poppins-Medium";
`;

export const NameSupplier = styled.Text`
  font-size: 16px;
  color: ${colors.DarkGray};
  font-family: "Poppins-Regular";
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: ${colors.Red};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

/////////////////////////////////////////////////

export const FirstView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  color: ${colors.Red};
  font-family: "Poppins-Regular";
`;

export const ButtonClose = styled.TouchableOpacity``;

export const Separator28 = styled.View`
  height: 28px;
`;

export const ColumView = styled.View`
  margin-left: 20px;
`;

export const AlignContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextData = styled.Text`
  font-size: 13px;
  color: ${colors.Gray};
  font-family: "Poppins-Medium";
`;

export const TextInformation = styled.Text`
  font-size: 24px;
  color: ${colors.Black};
  font-family: "Poppins-Regular";
`;

export const SubContainer = styled.View`
  margin-left: 15px;
  padding: 5px;
`;

export const NameFruit = styled.Text`
  font-size: 13px;
  color: ${colors.Gray};
  font-family: "Poppins-Regular";
`;

export const TextAbove = styled.Text`
  font-size: 16px;
  color: ${colors.Black};
  font-family: "Poppins-Regular";
  margin-left: 20px;
`;
