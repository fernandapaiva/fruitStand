import React from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  Separator15,
  Separator16,
  TitleRegistration,
  Content,
  SeparatorItens,
  InputSearch,
  ViewInput,
  ContainerImage,
  ContainerInformation,
  Separator24,
  Separator40,
  Main,
  DataSupplier,
  LiningUp,
  NameSupplier,
  ButtonAdd,
  Separator8,
  Separator48,
} from "./styles";
import Close from "../../assets/images/Close";
import Person from "../../assets/images/Person";
import RedButton from "../../components/RedButton";
import Call from "../../assets/images/Call";
//
import Search from "../../assets/images/Search";
import Add from "../../assets/images/Add";

const DATA = [
  {
    fornecedor: "Lorem ipsum",
    cpf: "000.000.000-00",
    telefone: "(00) 0000-0000",
  },
  {
    fornecedor: "Lorem ipsum",
    cpf: "000.000.000-00",
    telefone: "(00) 0000-0000",
  },
  {
    fornecedor: "Lorem ipsum",
    cpf: "000.000.000-00",
    telefone: "(00) 0000-0000",
  },
  {
    fornecedor: "Lorem ipsum",
    cpf: "000.000.000-00",
    telefone: "(00) 0000-0000",
  },
  {
    fornecedor: "Lorem ipsum",
    cpf: "000.000.000-00",
    telefone: "(00) 0000-0000",
  },
];

const DataFruit = [
  {
    fruta: "Banana",
  },
  {
    fruta: "Maça",
  },
  {
    fruta: "Laranja",
  },
  {
    fruta: "Abacaxi",
  },
  {
    fruta: "Morango",
  },
  {
    fruta: "Manda",
  },
  {
    fruta: "Uva",
  },
  {
    fruta: "Pera",
  },
  {
    fruta: "Kiwi",
  },
  {
    fruta: "Melancia",
  },
];

export default function Supplier() {
  const navigation = useNavigation();

  const renderSupplierDetails = () => (
    <>
      <FirstView>
        <PageTitle>Fornecedor</PageTitle>
        <Close />
      </FirstView>
      <ColumView>
        <TextInformation>Lorem Ipsum</TextInformation>
        <Separator15 />
        <AlignContainer>
          <Person />
          <SeparatorItens />
          <TextData>000.000.000-00</TextData>
        </AlignContainer>
        <Separator15 />
        <AlignContainer>
          <Call />
          <SeparatorItens />
          <TextData>(00) 00000-0000</TextData>
        </AlignContainer>
      </ColumView>
      <TextAbove>Frutas</TextAbove>
      <FlatList
        data={DataFruit}
        renderItem={({ item }) => (
          <SubContainer>
            <NameFruit>{item.fruta}</NameFruit>
          </SubContainer>
        )}
      />
    </>
  );

  const renderEmptySupplier = () => (
    <Content>
      <TitleRegistration>Cadastre seu primeiro fornecedor</TitleRegistration>
      <Separator40 />
      <RedButton onPress={() => navigation.navigate("Step1")} />
    </Content>
  );

  const renderListSupplier = () => (
    <>
      <Separator48 />
      <Main>
        <ViewInput>
          <ContainerImage>
            <Search />
          </ContainerImage>
          <InputSearch
            placeholder="Pesquisar Fornecedor"
            placeholderTextColor="#363A3C"
          />
        </ViewInput>
        <Separator24 />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <>
              <ContainerInformation>
                <NameSupplier>{item.fornecedor}</NameSupplier>
                <Separator8 />
                <LiningUp>
                  <Person />
                  <SeparatorItens />
                  <DataSupplier>{item.cpf}</DataSupplier>
                </LiningUp>
                <Separator8 />
                <LiningUp>
                  <Call />
                  <SeparatorItens />
                  <DataSupplier>{item.telefone}</DataSupplier>
                </LiningUp>
              </ContainerInformation>
              <Separator16 />
            </>
          )}
        />
      </Main>
      <ButtonAdd activeOpacity={0.6}>
        <Add />
      </ButtonAdd>
    </>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="height"
      keyboardVerticalOffset={-50}
    >
      <Container>{renderEmptySupplier()}</Container>
    </KeyboardAvoidingView>
  );
}
