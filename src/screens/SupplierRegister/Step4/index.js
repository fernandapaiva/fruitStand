import React, {useState} from "react";
import { FlatList } from "react-native";

// libs
import { useNavigation } from '@react-navigation/native';

// styles
import {
  Container,
  Label,
  LayoutOld,
  CloseButton,
  Separator24,
  Separator40,
  Separator16,
  LiningContent,
  LayoutCurrent,
  ViewButton,
  BackgroundFruits,
  FullText,
  ButtonCheckBoxAll,
} from "./styles";

// icons
import CloseRed from "../../../assets/images/CloseRed";
import Right from "../../../assets/images/Right";

// components
import RedButton from "../../../components/RedButton";
import CheckBox from "../../../components/CheckBox";


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

  const [list, setList] = useState(DATA);
  const [allList, setAllList] = useState(false);

  const navigation = useNavigation();

  const onChangeCheckBox = (itemSelected, value) => {
    const newData = list.map(item => {
      if (item.fruta === itemSelected.fruta) {
        return {
          ...item,
          selected: value
        }
      }

      return item
    })

    setList(newData);

  }

  const onChangeCheckBoxAll = () => {
    const newData = list.map(item => {
      return {
        ...item,
        selected: !allList
      }
    })

    setAllList(!allList)
    setList(newData);

  }

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
     <Separator24 />
     <ButtonCheckBoxAll onPress={() => onChangeCheckBoxAll()}>
      <CheckBox checked={allList} onPress={() => onChangeCheckBoxAll()} />
      <FullText>Todas</FullText>
     </ButtonCheckBoxAll>
     <Separator16 />
     <FlatList
        data={list}
        renderItem={({ item }) => (
          <BackgroundFruits onPress={() => onChangeCheckBox(item, !item.selected)}>
            <CheckBox 
              checked={item.selected}
              onPress= {() => onChangeCheckBox(item, !item.selected)}
            />
            <FullText> {item.fruta}</FullText>
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
