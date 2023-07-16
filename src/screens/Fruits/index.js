import React, { useContext, useState, useEffect } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";

// libs
import { useNavigation } from "@react-navigation/native";

// styles
import {
  Container,
  Content,
  TitleRegistration,
  Separator40,
  SubContainer,
  Separator48,
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

// icons
import Search from "../../assets/images/Search";
import PeopleSmall from "../../assets/images/PeopleSmall";
import Cash from "../../assets/images/Cash";
import RightContent from "../../assets/images/RightContent";
import Add from "../../assets/images/Add";

// components
import RedButton from "../../components/RedButton";
import LoadingView from "../../components/Loading";
import SearchList from "../../components/SearchList";

// hoocks
import { HooksContext } from "../../hooks";

export default function Fruits() {
  const navigation = useNavigation();

  const [fruitsFilter, setfruitsFilter] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const {
    fruits,
    getFruits,
    updateFruit,
    RegisterFruit,
    getFruitById,
    fruitId,
    isLoading,
  } = useContext(HooksContext);

  useEffect(() => {
    getFruits();
  }, []);

  useEffect(() => {
    setfruitsFilter(fruits);
  }, [fruits]);

  const showEdit = (id) => {
    getFruitById(id);
    setIsEdit(true);
  };

  const renderEmptyFruits = () => (
    <Content>
      <TitleRegistration>Cadastre sua primeira fruta</TitleRegistration>
      <Separator40 />
      <RedButton
        onPress={() => navigation.navigate("RegisterFruits")}
        title="Cadastrar Fruta"
      />
    </Content>
  );

  const renderListFruits = () => (
    <>
      <Separator48 />
      <SubContainer>
        <SearchList isFruit setData={setfruitsFilter} />
        <Separator24 />
        <FlatList
          data={fruitsFilter}
          renderItem={({ item }) => (
            <>
              <ContainerInformation onPress={() => {}}>
                <LiningUp>
                  <NameFruits>{item.name}</NameFruits>
                  <RightContent />
                </LiningUp>
                <AligningData>
                  <Cash />
                  <SeparatorItens />
                  <ValueFruits>{item.price}</ValueFruits>
                  <SeparatorData />
                  <StockFruits>{item.stock} em estoque</StockFruits>
                </AligningData>
                <Separator8 />
                <AligningData>
                  <PeopleSmall />
                  <SeparatorItens />
                  <NameSupplier>{item.supplier}</NameSupplier>
                </AligningData>
              </ContainerInformation>
              <Separator16 />
            </>
          )}
        />
      </SubContainer>
      <ButtonAdd
        onPress={() => navigation.navigate("RegisterFruits")}
        activeOpacity={0.6}
      >
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
        {fruits.length === 0 && renderEmptyFruits()}
        {fruits.length > 0 && renderListFruits()}
      </Container>
    </KeyboardAvoidingView>
  );
}
