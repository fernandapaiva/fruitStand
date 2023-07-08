import React from "react";
import {FlatList} from 'react-native';
import {Container, InputSearch, ViewInput, ContainerImage, ContainerInformation, Sepator15, Sepator20, SepatorItens, Main, DataSupplier, LiningUp, NameSupplier, ButtonAdd} from "./styles";
import Search from "../../assets/Search";
import Person from "../../assets/Person";
import Call from "../../assets/Call";
import Add from "../../assets/Add";

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
]

export default function Supplier (){
    return(
        <Container>
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
            <Sepator20 />
            <FlatList
            data={DATA}
            renderItem={({item}) => (
                <>
                <ContainerInformation>
                <NameSupplier>{item.fornecedor}</NameSupplier>
                <LiningUp>
                <Person />
                <SepatorItens />
                 <DataSupplier>{item.cpf}</DataSupplier>
                </LiningUp>
                <LiningUp>
                <Call />
                <SepatorItens />
                <DataSupplier>{item.telefone}</DataSupplier>
                </LiningUp>
                </ContainerInformation>
                <Sepator15 />
                </>
            )}
            />
            </Main>
            <ButtonAdd activeOpacity={0.7}>
                <Add />
            </ButtonAdd>
        </Container>
    )
}