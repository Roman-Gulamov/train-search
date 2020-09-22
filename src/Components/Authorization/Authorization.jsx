import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { submitForm } from './submitForm';
import { LoginSchema } from './LoginSchema';
import './authorization.scss';


export const Authorization = () => {
    return (
        <div className="authorization">
            <div className='form'>
                <h1 className='form__title text-center mb-3'>Trains Aggregator</h1>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => submitForm(values)} 
                >
                {({ touched, errors, isSubmitting, values }) => (
                    <Form>
                        <div className='form-group'>
                            <label 
                                htmlFor='username' 
                                className={`form__label mb-2  ${touched.username && errors.username ? "form__error" : ""}`}
                            >
                                Логин
                            </label>
                            <Field
                                name='username'
                                type='text'
                                className= {`form__control ${touched.username && errors.username ? "form__invalid" : ""}`}
                                autoFocus={true}
                                autoComplete="true"
                                value={values.username}
                            />
                            <ErrorMessage
                                component="span"
                                name='username'
                                className="form__error absolute"
                            />
                        </div>

                        <div className='form-group'>
                            <label 
                                htmlFor='password' 
                                className={`form__label mb-2  ${touched.password && errors.password ? "form__error" : ""}`}
                            >
                                Пароль
                            </label>
                            <Field
                                name='password'
                                type='password'
                                className= {`form__control ${touched.password && errors.password ? "form__invalid" : ""}`}
                                autoComplete="true"
                                value={values.password}
                            />
                            <ErrorMessage
                                component="span"
                                name='password'
                                className="form__error absolute"
                            />
                        </div>
                        <div className='form__button'>
                            <Button type='submit' disabled={isSubmitting}>Войти</Button>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
        </div> // .authorization
    )
}
