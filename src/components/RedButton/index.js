import React from "react";
import {Button, TitleButton, SepatorItem} from "./styles";
import Adding from "../../assets/images/Adding";

export default function RedButton (){
    return(
        <Button activeOpacity={0.7} >
            <Adding />
            <SepatorItem />
            <TitleButton>Cadastrar Fornecedor</TitleButton>
        </Button>
    )
}