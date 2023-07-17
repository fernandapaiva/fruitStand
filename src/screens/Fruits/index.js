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
import ModalEdit from "../../components/ModalEdit";
import ModalCancelFruit from "../../components/ModalCancelFruit";

// hoocks
import { HooksContext } from "../../hooks";

// Pages
import RegisterFruits from "./RegisterFruits";

export default function Fruits() {
  const navigation = useNavigation();

  const [fruitsFilter, setfruitsFilter] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isNewFruit, setIsNewFruit] = useState(false);

  const [visible, setVisible] = useState(false);
  const [itemId, setItemId] = useState('');
  const [visibleDelete, setVisibleDelete] = useState(false);

  const {
    fruits,
    getFruits,
    getFruitById,
    isLoading,
    removeFruit,
  } = useContext(HooksContext);

  useEffect(() => {
    getFruits();
  }, []);

  useEffect(() => {
    setfruitsFilter(fruits);
  }, [fruits]);

  const showNewFruit = () => {
    setIsNewFruit(true);
  };


  const onPressEdit = () => {
    getFruitById(itemId);
    setVisible(false)
    setIsEdit(true)
  }

  const onPressCancel = () => {
    setVisible(false)
    setVisibleDelete(true);
  }

  const onCloseRegister = () => {
    setIsEdit(false)
    setIsNewFruit(false)
  }

  const onPressDeleteFruit = () => {
    removeFruit(itemId)
    setVisibleDelete(false)
  }

  const renderEmptyFruits = () => (
    <Content>
      <TitleRegistration>Cadastre sua primeira fruta</TitleRegistration>
      <Separator40 />
      <RedButton
        onPress={() => showNewFruit()}
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
              <ContainerInformation
                onPress={() => {
                  setItemId(item.id)
                  setVisible(true);
                }}
              >
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
        onPress={() => showNewFruit()}
        activeOpacity={0.6}
      >
        <Add />
      </ButtonAdd>
    </>
  );

  return (
    <>
      <ModalEdit visible={visible} setVisible={setVisible}  onPressEdit={onPressEdit} onPressCancel={onPressCancel}/>
      <ModalCancelFruit visible={visibleDelete} setVisible={setVisibleDelete} onPress={onPressDeleteFruit}/>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
        keyboardVerticalOffset={-60}
      >
        {isLoading && <LoadingView />}
        <Container>
          {fruits.length === 0 && (!isEdit && !isNewFruit) && renderEmptyFruits()}
          {(fruits.length > 0 && (!isEdit && !isNewFruit)) && renderListFruits()}
          {(isNewFruit || isEdit) && (<RegisterFruits onCloseRegister={onCloseRegister} isEdit={isEdit}/>)}
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
