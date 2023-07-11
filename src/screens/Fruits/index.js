import React from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  TitleRegistration,
  Separator40,
  SubContainer,
  ViewInput,
  Separator48,
  ContainerImage,
  InputSearch,
  Separator24,
  Separator16,
  SeparatorItens,
  Separator8,
  ValueFruits,
  NameSupplier,
  LiningUp,
  ContainerInformation,
  NameFruits,
  ButtonAdd,
  StockFruits,
  SeparatorData,
  AligningData,
} from "./styles";

import Search from "../../assets/images/Search";
import PeopleSmall from "../../assets/images/PeopleSmall";
import Cash from '../../assets/images/Cash'
import RightContent from "../../assets/images/RightContent";
import Add from "../../assets/images/Add";

import RedButton from "../../components/RedButton";

const DATA = [
    {
      fruta: "Maça",
      valor: "R$2,50",
      estoque: "50 em estoque",
      fornecedor: "Lorem ipsum dolor sit consectetur",
    },
    {
      fruta: "Banana",
      valor: "R$1,80",
      estoque: "75 em estoque",
      fornecedor: "Lorem ipsum dolor sit consectetur",
    },
    {
      fruta: "Laranja",
      valor: "R$3,00",
      estoque: "30 em estoque",
      fornecedor: "Lorem ipsum dolor sit consectetur",
    },
    {
      fruta: "Abavaxi",
      valor: "R$5,50",
      estoque: "20 em estoque",
      fornecedor: "Lorem ipsum dolor sit consectetur",
    },
    {
      fruta: "Morango",
      valor: "R$2,50",
      estoque: "100 em estoque",
      fornecedor: "Lorem ipsum dolor sit consectetur",
    },
  ];

export default function Fruits() {
  const navigation = useNavigation();

  const renderEmptyFruits = () => (
    <Content>
      <TitleRegistration>Cadastre sua primeira fruta</TitleRegistration>
      <Separator40 />
      <RedButton 
      onPress={() => navigation.navigate('RegisterFruits')}
      title="Cadastrar Fruta"
      />
    </Content>
  );

  const renderListFruits = () => (
    <>
      <Separator48 />
      <SubContainer>
        <ViewInput>
          <ContainerImage>
            <Search />
          </ContainerImage>
          <InputSearch
            placeholder="Pesquisar Fruta"
            placeholderTextColor="#363A3C"
          />
        </ViewInput>
        <Separator24 />
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <>
              <ContainerInformation>
                <LiningUp>
                <NameFruits>{item.fruta}</NameFruits>
                <RightContent />
                </LiningUp>
                <AligningData>
                  <Cash />
                  <SeparatorItens />
                  <ValueFruits>{item.valor}</ValueFruits>
                  <SeparatorData />
                  <StockFruits>{item.estoque}</StockFruits>
                </AligningData>
                <Separator8 />
                <AligningData>
                  <PeopleSmall/>
                  <SeparatorItens />
                  <NameSupplier>{item.fornecedor}</NameSupplier>
                </AligningData>               
              </ContainerInformation>
              <Separator16 />
            </>
          )}
        />
      </SubContainer>
      <ButtonAdd 
      onPress={() =>navigation.navigate('RegisterFruits')}
      activeOpacity={0.6}>
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
      <Container>{renderEmptyFruits()}</Container>
    </KeyboardAvoidingView>
  );
}
