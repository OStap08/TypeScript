import React, {FC} from 'react';
import {ICard} from "../types/types";
import laptopPNG from "../assets/img/laptop.png"
import "../styles/card.css"
import moment from "moment";

interface CardProps {
   card: ICard
}

const Card: FC<CardProps> = ({card}) => {
    return (
        <div className="card" data-testid="card-testid">
            <div className="card-panorama">
                <img className="img" src={laptopPNG} alt=""/>
            </div>
            <div className="card-body">
                <div className="marks">
                    <span>{card.category}</span>
                    <span>{moment(card.createdDate).fromNow()}</span>
                </div>
                <span className="card-title">{card.title}</span>
                <div className="card-description">{card.description}</div>
                <div className="author">
                    <img className="author-img" src={card.author.profileImg} alt=""/>
                    <span>{card.author?.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;