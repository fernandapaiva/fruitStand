import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export const ButtonRegister = styled.TouchableOpacity`
  width: ${width - 30}px;
  height:40px;
  background-color: #f0f4f7;
  border-width: 1px;
  border-color: #da0d1e;
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
  color: #da0d1e;
  font-family: 'Poppins-Medium';
`;