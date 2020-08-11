import React from 'react';
import './trainBox.scss';
import { exitClick } from './exitClick';
import { ExitSvg } from './Svg/ExitSvg';
import { Departures } from './Departures/Departures';
import { CarouselBox } from './CarouselBox/CarouselBox';
import { DirectTrains } from './DirectTrains/DirectTrains';


export const TrainBox = () => {
    return (
        <div className='trainBox'>
            <div className='login'>
                <a href='/train-search/#/authorization' onClick={exitClick}>
                    <span>Выйти</span>
                    <ExitSvg />
                </a>
            </div>
            <div className='trainBox__wrapper'>
                <Departures />
                <CarouselBox />
                <DirectTrains />
            </div>
        </div>
    )
}
