import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CAROUSEL_DATA from './Data/CarouselData';
import './carouselBox.scss';
import { slickSettings } from './slickSettings';

export const CarouselBox = () => {
    return (
        <>
        <div className='carousel'>
            <Slider {...slickSettings}>
                {CAROUSEL_DATA.map(({ src, alt }) => (
                    <div key={alt} className='carousel__item'>
                        <img src={src} className='carousel__img' alt={alt} />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    )
}

