import React, { useEffect, useState } from 'react';
import './directTrains.scss';
import { Context } from '../../context';
import { DirectMap } from './DirectMap';


export const DirectTrains = () => {
    const initialState = () => Number(localStorage.getItem("isFavorite") || null);
    const [isFavorite, setIsFavorite] = useState(initialState);

    const onFavoriteHandler = (event) => {
        const heart = event.target;
        const heartId = heart.getAttribute("data-heartid");

        if (heart.classList.contains('fill')) {
            setIsFavorite(isFavorite - 1);
            localStorage.removeItem(`heart ${heartId}`);
        } else {
            setIsFavorite(isFavorite + 1);
            localStorage.setItem(`heart ${heartId}`, 'fill');
        }
    }

    useEffect(() => localStorage.setItem("isFavorite", isFavorite), [isFavorite]);

    return (
        <Context.Provider value={(event) => onFavoriteHandler(event)}>
            <>
                <div className='countFavor'>
                    <span>Добавлено в Избранное: <span className='text-primary'>{isFavorite}</span> рейсов</span>
                </div>
                <div className='direct mt-4'>
                    <DirectMap />
                </div>
            </>
        </Context.Provider>
    )
}
