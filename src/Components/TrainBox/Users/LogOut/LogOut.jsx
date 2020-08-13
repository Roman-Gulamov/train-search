import React from 'react';
import { exitClick } from '../exitClick';
import { ExitSvg } from '../Svg/ExitSvg';

export const LogOut = () => {
    return (
        <>
            <div className='users__logOut'>
            <a href='/train-search/#/authorization' onClick={exitClick}>
                <span>Выйти</span>
                <ExitSvg />
            </a>
            </div>
        </>
    )
}