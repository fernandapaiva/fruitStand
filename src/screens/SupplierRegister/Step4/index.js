import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox'
import {
  Container,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  LiningContent,
  LayoutCurrent,
  ViewButton,
  BackgroundFruits,
  NameFruit,
  RowView,
} from "./styles";
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";
import RedButton from "../../../components/RedButton";


const DATA = [
  {
    fruta: "Banana",
    selected: false,
  },
  {
    fruta: "Maça",
    selected: false,
  },
  {
    fruta: "Laranja",
    selected: false,
  },
  {
    fruta: "Abacaxi",
    selected: false,
  },
  {
    fruta: "Morango",
    selected: false,
  },
  {
    fruta: "Manga",
    selected: false,
  },
  {
    fruta: "Uva",
    selected: false,
  },
  {
    fruta: "Pera",
    selected: false,
  },
  {
    fruta: "Kiwi",
    selected: false,
  },
  {
    fruta: "Melancia",
    selected: false,
  },
];

export default function Step4() {

  const navigation = useNavigation();

  return (
    <Container>
      <Separator24 />
      <CloseButton onPress={() => navigation.navigate('Supplier')}>
        <CloseRed />
      </CloseButton>
      <Separator24 />
      <LiningContent>
        <LayoutOld>Nome</LayoutOld>
        <Right />
        <LayoutOld>CPF</LayoutOld>
        <Right />
        <LayoutOld>Telefone</LayoutOld>
        <Right />
        <LayoutCurrent>Frutas</LayoutCurrent>
      </LiningContent>
      <Separator40 />
      <Label>Escolha as frutas que esse fornecedor nos fornece</Label>
     <>
     <RowView>
      <CheckBox />
      <NameFruit>Todas</NameFruit>
     </RowView>
     <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <BackgroundFruits>
            <CheckBox value={item.selected}/>
            <NameFruit> {item.fruta}</NameFruit>
          </BackgroundFruits>
          
        )}
      />
     </> 
      <ViewButton>
      <RedButton 
      onPress={() => navigation.navigate('LestStep')} 
      title='Cadastrar Fornecedor'
      Icon={false}
      />
      </ViewButton>
    </Container>
  );
}
