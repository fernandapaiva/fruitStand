import React from "react";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import {
  Container,
  FirstView,
  PageTitle,
  CloseButton,
  ViewButton,
  InputName,
  ViewInput,
  ContentImage,
  Separator16,
} from "./styles";

import Close from "../../assets/images/Close";
import Apple from "../../assets/images/Apple";
import Money from "../../assets/images/Money";
import Coins from "../../assets/images/Coins"

import RedButton from "../../components/RedButton";
import PickerSelectStyles from '../../components/PickerSelectStyles/styles';

const DataFruit = [
  {
    label: "Banana",
    value: 0,
    key: 0,
  },
  {
    label: "Maça",
    value: 1,
    key: 1,
  },
  {
    label: "Laranja",
    value: 2,
    key: 2,
  },
  {
    label: "Abacaxi",
    value: 3,
    key: 3,
  },
  {
    label: "Morango",
    value: 4,
    key: 4,
  },
  {
    label: "Manga",
    value: 5,
    key: 5,
  },
  {
    label: "Uva",
    value: 6,
    key: 6,
  },
  {
    label: "Pera",
    value: 7,
    key: 7,
  },
  {
    label: "Kiwi",
    value: 8,
    key: 8,
  },
  {
    label: "Melancia",
    value: 9,
    key: 9,
  },
];

export default function RegisterFruits() {
  const navigation = useNavigation();

  return (
    <Container>
      <FirstView>
        <PageTitle>Cadastrar Fruta</PageTitle>
        <CloseButton onPress={() => navigation.navigate("Fruits")}>
          <Close />
        </CloseButton>
      </FirstView>
      <ViewInput>
        <ContentImage>
            <Apple />
        </ContentImage>
      <InputName 
      placeholder="Nome da fruta"
      placeholderTextColor="#6C7072"
      />
      </ViewInput>
      <Separator16 />
      <ViewInput>
        <ContentImage>
            <Money />
        </ContentImage>
      <InputName 
      placeholder="Preço do Kilo"
      placeholderTextColor="#6C7072"
      />
      </ViewInput>
      <Separator16 />
      <ViewInput>
        <ContentImage>
            <Coins />
        </ContentImage>
      <InputName 
      placeholder="Quantidade no estoque"
      placeholderTextColor="#6C7072"
      />
      </ViewInput>
      {/* <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        style={PickerSelectStyles}
        onValueChange={(value) => console.log(value)}
        value={null}
        items={DataFruit}
        placeholder={{
          label: 'Fornecedor',
          value: null,
          color: '#000'
        }}
      /> */}
      <ViewButton>
        <RedButton
          onPress={() => {}}
          title="Cadastrar Fruta"
          Icon={false}
        />
      </ViewButton>
    </Container>
  );
}
