import React from "react";
import { useNavigation } from "@react-navigation/native";
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
