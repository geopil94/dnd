import React from "react";
import styled from "styled-components";

const CharItemWrapper = styled.div`
    width: 200px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const CharHeader = styled.p`
    border: 1px solid black;
    color: red;
    font-size: 20px;
`;

const CharModifier = styled.p`
    font-size: 40px;
    border: 1px solid black;
`;

const CharValue = styled.p`
    color: green;
    border: 1px solid black;
`;

type CharacteristicItemProps = {
    name: string,
    value: number,
    abbreviation?: string
}
export const CharacteristicItem = ({name, value} : CharacteristicItemProps) => {
    const calcModifier = (value: number): string => {
        const modifier = Math.ceil((value - 10)/2);
        return modifier >= 0 ? `+${modifier}` : modifier.toString();
    }

    return (
        <CharItemWrapper>
            <CharHeader> {name} </CharHeader>
            <CharModifier> {calcModifier(value)} </CharModifier>
            <CharValue> {value} </CharValue>
        </CharItemWrapper>
    )
}