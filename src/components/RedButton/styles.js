import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export const Button = styled.TouchableOpacity`
  width: ${width - 30}px;
  height:40px;
  background-color: #da0d1e;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SepatorItem = styled.View`
  width: 10px;
`;

export const TitleButton = styled.Text`
  font-size: 13px;
  color: #ffffff;
  font-family: 'Poppins-Medium';
  margin-top: 2px;
`;