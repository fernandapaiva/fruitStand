import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  FirstView,
  PageTitle,
  NameFruit,
  SubContainer,
  TextAbove,
  TextInformation,
  AlignContainer,
  ColumView,
  TextData,
  Sepator15,
  TitleRegistration,
  Content,
} from "./styles";
import Close from "../../assets/images/Close";
import Person from "../../assets/images/Person";
import { SepatorItem } from "../../components/RedButton/styles";
import RedButton from "../../components/RedButton";
import Call from "../../assets/images/Call";

const DataFruit = [
  {
    fruta1: "Banana",
    fruta2: "Maça",
    fruta3: "Laranja",
    fruta4: "Abacaxi",
    fruta5: "Morango",
    fruta6: "Manda",
    fruta7: "Uva",
    fruta8: "Pera",
    fruta9: "Kiwi",
    fruta10: "Melancia",
  },
];

export default function Supplier() {
  const renderSupplierDetails = () => (
    <>
      <FirstView>
        <PageTitle>Fornecedor</PageTitle>
        <Close />
      </FirstView>
      <ColumView>
        <TextInformation>Lorem Ipsum</TextInformation>
        <Sepator15 />
        <AlignContainer>
          <Person />
          <SepatorItem />
          <TextData>000.000.000-00</TextData>
        </AlignContainer>
        <Sepator15 />
        <AlignContainer>
          <Call />
          <SepatorItem />
          <TextData>(00) 00000-0000</TextData>
        </AlignContainer>
      </ColumView>
      <FlatList
        data={DataFruit}
        renderItem={({ item }) => (
          <SubContainer>
            <TextAbove>Frutas</TextAbove>
            <NameFruit>{item.fruta1}</NameFruit>
          </SubContainer>
        )}
      />
    </>
  );

  const renderEmptySupplier = () => (
    <Content>
      <TitleRegistration>Cadastre seu primeiro fornecedor</TitleRegistration>
      <RedButton />
    </Content>
  );

  return (
    <Container>
      {renderEmptySupplier()}
    </Container>
  );
}
