import React, { useState, useContext } from "react";
import { FlatList } from "react-native";

const listFruit = [
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

// libs
import { useNavigation } from "@react-navigation/native";

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
import LoadingView from "../../../components/Loading";
import ModalCancelRegister from "../../../components/ModalCancelRegister";

// hooks
import { HooksContext } from "../../../hooks";

export default function Step4({ route }) {
  const params = route?.params;

  const navigation = useNavigation();

  const { RegisterSupplier, isLoading } = useContext(HooksContext);

  const [list, setList] = useState(listFruit);
  const [allList, setAllList] = useState(false);

  const [visible, setVisible] = useState(false);

  const onChangeCheckBox = (itemSelected, value) => {
    const newData = list.map((item) => {
      if (item.fruta === itemSelected.fruta) {
        return {
          ...item,
          selected: value,
        };
      }

      return item;
    });

    setList(newData);
  };

  const onChangeCheckBoxAll = () => {
    const newData = list.map((item) => {
      return {
        ...item,
        selected: !allList,
      };
    });

    setAllList(!allList);
    setList(newData);
  };

  const onPressRegister = () => {
    const newList = list.filter((item) => item?.selected);
    if (newList?.length > 0) {
      const data = {
        name: params?.name,
        cpf: params?.cpf,
        phone: params?.phone,
        fruits: newList,
      };
      RegisterSupplier(data);
    }
    !isLoading && navigation.navigate("LestStep", { name: params?.name });
  };

  const onPressModal = () => {
    setVisible(false);
    navigation.navigate("Supplier");
  };

  return (
    <Container>
      <ModalCancelRegister
        visible={visible}
        setVisible={setVisible}
        onPress={onPressModal}
      />
      {isLoading && <LoadingView />}
      <Separator24 />
      <CloseButton onPress={() => setVisible(true)}>
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
            <BackgroundFruits
              onPress={() => onChangeCheckBox(item, !item.selected)}
            >
              <CheckBox
                checked={item.selected}
                onPress={() => onChangeCheckBox(item, !item.selected)}
              />
              <FullText> {item.fruta}</FullText>
            </BackgroundFruits>
          )}
        />
      </>
      <ViewButton>
        <RedButton
          onPress={() => onPressRegister()}
          title="Cadastrar Fornecedor"
          Icon={false}
        />
      </ViewButton>
    </Container>
  );
}
