import React from 'react';
import './trainBox.scss';
import { Users } from './Users/Users'
import { Departures } from './Departures/Departures';
import { CarouselBox } from './CarouselBox/CarouselBox';
import { DirectTrains } from './DirectTrains/DirectTrains';


export const TrainBox = () => {
    return (
        <div className='trainBox'>
            <Users />
            <div className='trainBox__wrapper'>
                <Departures />
                <CarouselBox />
                <DirectTrains />
            </div>
        </div>
    )
}
