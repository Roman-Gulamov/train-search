import React from 'react';
import { getCookie } from './getCookie';
import { TrainBox } from '../TrainBox/TrainBox';
import { Redirect } from 'react-router-dom';

export const currentPath = () => {
    if (getCookie('login') && getCookie('password')) {
        return <TrainBox />
    } else {
        return <Redirect to="/authorization" />
    }
}