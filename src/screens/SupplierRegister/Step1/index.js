import React from "react";
import {Main, InputName, NameText, Name, ContentInitial, Separator30, Separator15} from "./styles";
import { Content } from "../../Supplier/styles";

export default function Step1 (){

    return(
        <Main>
            <Separator15 />
            <ContentInitial>
                {/* Botão */}
            </ContentInitial>
            <Separator15 />
            <Name>Nome</Name>
            <Separator30 />
            <InputName 
            placeholder="Digite o nome do colaborador"
            placeholderTextColor="#383b3d"
            />
            <Separator15 />
            <NameText>Nome</NameText>
        </Main>
    )
}