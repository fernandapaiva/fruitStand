import styled from "styled-components/native";
import { colors } from '../../assets/colors/styles';


export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Black};
  opacity: 0.92;
  justify-content: flex-end;
`;

export const SubContainer = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${colors.Backgroud};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: center;
  padding: 20px;
`;

export const ButtonModal =styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SeparatorItens =styled.View`
  height: 20px;
`;

export const TextModal =styled.Text`
  font-size: 13px;
  font-family: 'Poppins-Medium';
  color: ${colors.Black};
  margin-left: 8px;
`;