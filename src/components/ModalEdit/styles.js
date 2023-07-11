import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #212324;
  opacity: 0.92;
  justify-content: flex-end;
`;

export const SubContainer = styled.View`
  width: 100%;
  height: 120px;
  background-color: #F0F4F7;
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
  color: #212324;
  margin-left: 8px;
`;