import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Button, TitleButton, SepatorItem} from "./styles";
import Adding from "../../assets/images/Adding";

export default function RedButton (){

    const navigation = useNavigation();

    return(
        <Button 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Step3')}
        >
            <Adding />
            <SepatorItem />
            <TitleButton>Cadastrar Fornecedor</TitleButton>
        </Button>
    )
}