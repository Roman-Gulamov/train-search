import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DIRECT_DATA } from './Data/DirectData';
import { ArrowSvg } from './Svg/ArrowSvg';
import { HeartSvg } from './Svg/HeartSvg';


export const DirectMap = () => {
    return (
        <>
        {DIRECT_DATA.map(({ Time, TrainCompany, Price, Id, TrainCompanyImg }) => (
            <div className='direct__item' key={Id}>
                <Row>
                    <Col xs={12} md={2} className='direct__img'>
                        <img src={TrainCompanyImg} alt={TrainCompany}/>
                    </Col>
                    <Col xs={12} md={6} className='direct__information'>
                        <div className='direct__departures'>
                            <span>  Moscow</span>
                            <ArrowSvg />
                            <span>St. Petersburg</span>
                        </div>
                        <div className='direct__date'>11 August, 2020 <span></span>{Time}</div>
                        <div className='direct__company'>{TrainCompany}</div>
                    </Col>
                    <Col xs={12} md={4} className="direct__other">
                        <HeartSvg Id = {Id} />
                        <div className='direct__price'>
                            <span>Price:</span> {Price} &#8381;
                        </div>
                    </Col>
                </Row>
            </div>
        ))}    
        </>
    )
}
