import React, {FC} from 'react';
import {ICard} from "../types/types";
import Card from "./Card";
import '../styles/cardList.css'

interface CardsListProps {
    cards: ICard[]
}

const CardList: FC<CardsListProps> = ({cards}) => {
    return (
        <div className='cardList'>
            {cards.map((card) => {
                return(
                   <Card key={card.id} card={card} />
                )
            })}
        </div>
    );
};

export default CardList;