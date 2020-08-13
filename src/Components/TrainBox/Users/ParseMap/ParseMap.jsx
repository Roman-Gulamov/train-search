import React from 'react';
import { Accordion, Card } from 'react-bootstrap';


export const ParseMap = ({ parseFile, checkAvailability, checkOnline }) => {
    return (
        <>
        {parseFile.map(user => (
            <Card
                key={user.id} 
                data-id={user.id} 
            > 
                <Accordion.Toggle 
                    as={Card.Header} 
                    variant="link" 
                    eventKey={user.id.toString()} 
                    className={`users__header ${checkOnline(user.is_superuser, user.is_active)}`}
                >   <span>{`ID: ${user.id}`}</span> 
                    <span>{`Никнейм: ${checkAvailability(user.username)}`}</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={user.id.toString()}>
                    <Card.Body>
                        <div>Имя: {checkAvailability(user.first_name)}</div>
                        <div>Фамилия: {checkAvailability(user.last_name)}</div>
                        <div>Последний визит: {checkAvailability(user.last_login)}</div>
                        <div>Статус: {user.is_active ? "Онлайн" : "Оффлайн"}</div>
                        <div>{user.is_superuser ? "VIP" : ""}</div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        ))}
        </>
    )
}