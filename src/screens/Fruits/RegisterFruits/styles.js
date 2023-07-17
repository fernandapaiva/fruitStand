import styled from "styled-components/native";
import { colors } from '../../../assets/colors/styles';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export const FirstView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  color: ${colors.Red};
  font-family: 'Poppins-Regular';
`;

export const CloseButton = styled.TouchableOpacity``;

export const ViewInput = styled.View`
  width: ${width - 35}px;
  height: 56px;
  flex-direction: row;
  background-color: ${colors.White};
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
  bottom: 20px;
  left: 12px;
  right: 0;
  position: absolute;
`;

export const ErrorMensage = styled.Text`
  font-size: 12px;
  color: ${colors.RedError};
  font-family: 'Poppins-Regular';
  margin-left: 20px;
  margin-top: 5px;
`;