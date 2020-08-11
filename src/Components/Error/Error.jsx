import React from 'react';
import "./error.scss";
import Bad from '../../assets/images/Bad/Bad.png';

export const Error = () => {
    return (
        <>
            <div className='error mt-4'>
                <img
                    src={Bad}
                    alt='404'
                />
            </div>
        </>
    )
}
