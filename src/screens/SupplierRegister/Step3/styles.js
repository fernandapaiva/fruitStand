import styled from "styled-components/native";
import { colors } from "../../../assets/colors/styles";


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Backgroud};
  padding-horizontal: 20px;
`;

export const Separator40 = styled.View`
  height: 40px;
`;

export const Separator24 = styled.View`
  height: 24px;
`;

export const Separator15 = styled.View`
  height: 15px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const LiningContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LayoutOld = styled.Text`
  font-size: 13px;
  color: #212324;
  font-family: 'Poppins-Medium';
`;

export const LayoutCurrent = styled.Text`
  font-size: 13px;
  color: ${colors.Red};
  font-family: 'Poppins-Medium';
`;

export const Label = styled.Text`
  font-size: 15px;
  color: ${colors.DarkGray};
  font-family: 'Poppins-Regular';
`;

export const InputPhone = styled.TextInput`
  width: 80%;
  min-height: 24px;
  font-size: 24px;
  color: ${props => props.errorPhone ? "#930000" : "#6C7072"};
  font-family: 'Poppins-Regular';
  right: 5px;
`;

export const ViewButton = styled.View`
  width: 100%;
  bottom: 40px;
  left: 10px;
  right: 0;
  position: absolute;
`;

export const ErrorMensage = styled.Text`
  font-size: 12px;
  color: ${colors.RedError};
  font-family: 'Poppins-Regular';
  margin-left: 5px;
`;