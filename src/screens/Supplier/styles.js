import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export const Content = styled.View`
  flex: 1;
  background-color: #f0f4f7;
  align-items: center;
  justify-content: center;
`;

export const TitleRegistration = styled.Text`
  font-size: 16px;
  color: #212324;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 30px;
  font-family: 'Poppins-Regular';
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f0f4f7;
`;

export const Separator20 = styled.View`
  height: 20px;
`;

export const Separator15 = styled.View`
  height: 15px;
`;

export const SeparatorItens = styled.View`
  width: 10px;
`;

export const Separator8 = styled.View`
  height: 10px;
`;

export const Main = styled.View`
  align-items: center;
`;


export const ViewInput = styled.View`
  flex-direction: row;
  width: ${width - 40}px;
  height: 56px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const InputSearch = styled.TextInput`
  width: 80%;
  height: 56px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const ContainerImage = styled.View`
  width: 20%;
  align-items: center;
  justify-content: center;
`;

export const ContainerInformation = styled.View`
  width: ${width - 40}px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
`;

export const LiningUp = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DataSupplier = styled.Text`
  font-size: 13px;
  color: #6c7072;
`;

export const NameSupplier = styled.Text`
  font-size: 16px;
  color: #212324;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: #DA0D1E;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  right: 10px;
`;

/////////////////////////////////////////////////

export const FirstView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  min-height: 72px;
  padding: 20px;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  color: #da0d1e;
`;

export const ColumView = styled.View`
  padding: 20px;
`

export const AlignContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextData = styled.Text`
  font-size: 13px;
  color: #6c7072;
`;

export const TextInformation = styled.Text`
  font-size: 24px;
  color: #212324;
`;

export const SubContainer= styled.View`
  padding: 10px;
`;

export const NameFruit = styled.Text`
  font-size: 13px;
  color: #6c7072;
`;

export const TextAbove = styled.Text`
  font-size: 16px;
  color: #212324;
`;
