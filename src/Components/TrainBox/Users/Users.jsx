import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Form, Accordion, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { sortUp, sortBottom } from './Sort/sortID';
import { sortName } from './Sort/sortName';
import { sortRef } from './Sort/ref';
import { ParseMap } from './ParseMap/ParseMap';
import { LogOut } from './LogOut/LogOut';
import './users.scss';

export const Users = () => {
    const axios = Axios.create();

    const [parseFile, setParseFile] = useState([]);
    const initialToken = () => (localStorage.getItem("token") || null);
    const token = initialToken();

    useEffect(() => {
        axios.get("http://emphasoft-test-assignment.herokuapp.com/api/v1/users/", {
            'headers': {
                "Authorization": `Token ${token}`
            }
        })
        .then((response) => {
            setParseFile(response.data);
        })
    });

    const checkOnline = (vip, online) => {
        if (vip) {
            return "bg-warning"
        } else if (online) {
            return "bg-success";
        }
    }

    const checkAvailability = (data) => {
        if (data) {
            return data;
        } else {
            return "Неизвестно"
        }
    }            

    return (
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/train-search/#/search">Train Aggregator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav text-white">
                    <NavDropdown title="Пользователи" id="basic-nav-dropdown">
                        <Form.Control 
                            type="text" 
                            onInput={(event) => sortName(event)} 
                            placeholder="Найти по никнейму..." 
                        />
                        <Form.Control
                            type="button"
                            onClick={sortUp}
                            value="Сортировать по возрастанию"
                            className="users__button"
                        />
                        <Form.Control
                            type="button"
                            onClick={sortBottom}
                            value="Сортировать по убыванию"
                            className="users__button"
                        />
                        <Accordion defaultActiveKey="0" ref={sortRef}>
                            <ParseMap 
                                parseFile={parseFile}
                                checkOnline={checkOnline}
                                checkAvailability={checkAvailability}
                            />
                        </Accordion>
                    </NavDropdown>
                </Nav>
                <LogOut />
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
