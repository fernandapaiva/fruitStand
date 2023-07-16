import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  background-color: #F0F4F7;
  margin-top: 10px;
`;

export const FirstView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  color: #da0d1e;
  font-family: 'Poppins-Regular';
`;

export const CloseButton = styled.TouchableOpacity``;

export const ViewInput = styled.View`
  width: ${width - 35}px;
  height: 56px;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 8px;
  align-self: center;
`;

export const ContentImage = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 85%;
  font-size: 15px;
  color: ${props => (props.errorFruit || props.errorPrice || props.errorStock) ? "#930000" : "#6C7072"};
  font-family: 'Poppins-Regular';
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

export const ErrorMensage = styled.Text`
  font-size: 12px;
  color: #930000;
  font-family: 'Poppins-Regular';
  margin-left: 20px;
  margin-top: 5px;
`;