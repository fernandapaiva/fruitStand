import React, { useContext, useEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";

// libs
import { useNavigation } from "@react-navigation/native";

// styles
import {
  Container,
  FirstView,
  ButtonClose,
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

// icons
import Close from "../../assets/images/Close";
import Person from "../../assets/images/Person";
import Call from "../../assets/images/Call";
import Add from "../../assets/images/Add";

// components
import RedButton from "../../components/RedButton";
import LoadingView from "../../components/Loading";
import SearchList from "../../components/SearchList";

// hooks
import { HooksContext } from "../../hooks";

export default function Supplier() {
  const navigation = useNavigation();

  const [suppliersFilter, setSupplierFilter] = useState([]);
  const [isDetails, setIsDatails] = useState(false);

  const {
    suppliers,
    getSuppliers,
    getSupplierById,
    supplierId,
    RegisterSupplier,
    isLoading,
  } = useContext(HooksContext);

  useEffect(() => {
    getSuppliers();
  }, []);

  useEffect(() => {
    setSupplierFilter(suppliers);
  }, [suppliers]);

  const showDatails = (id) => {
    getSupplierById(id);
    setIsDatails(true);
  };

  const renderSupplierDetails = () => (
    <>
      <Separator15 />
      <FirstView>
        <PageTitle>Fornecedor</PageTitle>
        <ButtonClose onPress={() => setIsDatails(false)}>
          <Close />
        </ButtonClose>
      </FirstView>
      <ColumView>
        <TextInformation>{supplierId.name}</TextInformation>
        <Separator15 />
        <AlignContainer>
          <Person />
          <SeparatorItens />
          <TextData>{supplierId.cpf}</TextData>
        </AlignContainer>
        <Separator15 />
        <AlignContainer>
          <Call />
          <SeparatorItens />
          <TextData>{supplierId.phone}</TextData>
        </AlignContainer>
      </ColumView>
      <Separator24 />
      <>
        <TextAbove>Frutas</TextAbove>
      </>
      <FlatList
        data={supplierId.Fruits}
        renderItem={({ item }) => (
          <SubContainer>
            <NameFruit> • {item.name}</NameFruit>
          </SubContainer>
        )}
      />
    </>
  );

  const renderEmptySupplier = () => (
    <Content>
      <TitleRegistration>Cadastre seu primeiro fornecedor</TitleRegistration>
      <Separator40 />
      <RedButton
        onPress={() => navigation.navigate("Step1")}
        title="Cadastrar Fornecedor"
      />
    </Content>
  );

  const renderListSupplier = () => (
    <>
      <Separator48 />
      <Main>
        <SearchList setData={setSupplierFilter} />
        <Separator24 />
        <FlatList
          data={suppliersFilter}
          renderItem={({ item }) => (
            <>
              <ContainerInformation onPress={() => showDatails(item.id)}>
                <NameSupplier>{item.name}</NameSupplier>
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
                  <DataSupplier>{item.phone}</DataSupplier>
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
      {isLoading && <LoadingView />}
      <Container>
        {isDetails && renderSupplierDetails()}
        {suppliers.length > 0 && !isDetails && renderListSupplier()}
        {suppliers.length === 0 && renderEmptySupplier()}
      </Container>
    </KeyboardAvoidingView>
  );
}
