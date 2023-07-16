import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #F0F4F7;
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
  color: #da0d1e;
  font-family: 'Poppins-Medium';
`;

export const InputCpf = styled.TextInput`
  width: 80%;
  height: 60px;
  font-size: 24px;
  color: ${props => props.errorCpf ? "#930000" : "#6C7072"};
  font-family: 'Poppins-Regular';
`;

export const Label = styled.Text`
  color: #383B3D;
  font-size: 15px;
  font-family: 'Poppins-Regular';
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
  color: #930000;
  font-family: 'Poppins-Regular';
  margin-left: 5px;
`;