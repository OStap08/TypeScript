import React, {FC, useEffect, useState} from 'react';
import CardList from '../components/CardList';
import {ICard} from "../types/types";
import "../styles/dashboard.css"

const Dashboard: FC = () => {
    const [cardsData, setCardsData] = useState<ICard[] | []>([])

    useEffect(() => {
        //all categories of cards
        fetchCardsData('d111f3d9-5c71-4553-adfc-8beb9fe13f31')
    }, [])

    async function fetchCardsData(path: string) {
        try {
            const response = await fetch(`https://mocki.io/v1/${path}`)
            const cardsArr = await response.json();
            setCardsData(cardsArr);
        } catch (e) {
            throw(e)
        }
    }

    return (
        <div className='dashboard'>
            <h1 className='dashboard-title'>Articles Dashboard</h1>
            <CardList cards={cardsData}/>
        </div>
    );
};

export default Dashboard;