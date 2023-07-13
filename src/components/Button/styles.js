import styled from "styled-components/native";
import {Dimensions} from 'react-native';
import { colors } from '../../assets/colors/styles';

const {width} = Dimensions.get('window')

export const ButtonRegister = styled.TouchableOpacity`
  width: ${width - 30}px;
  height:40px;
  background-color: ${colors.Backgroud};
  border-width: 1px;
  border-color: ${colors.Red};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SepatorItem = styled.View`
  width: 8px;
`;

export const TitleButton = styled.Text`
  font-size: 13px;
  color: ${colors.Red};
  font-family: 'Poppins-Medium';
`;