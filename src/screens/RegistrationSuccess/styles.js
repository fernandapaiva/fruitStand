import styled from "styled-components/native";
import { colors } from "../../assets/colors/styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Backgroud};
`;

export const SubContainer = styled.View`
  align-items: center;
`;

export const Separator24 = styled.View`
  height: 24px;
`;

export const Separator40 = styled.View`
  height: 40px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 16px;
`;

export const AligningText = styled.View`
  margin-left: 16px;
  top: 150px;
`;

export const Description = styled.Text`
  font-size: 19px;
  font-family: 'Poppins-Medium';
  color: ${colors.Black};
`;

export const Information = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Regular';
  color: ${colors.Gray};
`;

export const Separator16 = styled.View`
  height: 16px;
`;

export const ViewButton = styled.View`
   width: 100%;
  bottom: 40px;
  left: 10px;
  right: 0;
  position: absolute;
`;