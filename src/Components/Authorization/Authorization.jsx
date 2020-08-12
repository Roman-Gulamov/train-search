import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './authorization.scss';
import { submitForm } from './submitForm';
import { LoginSchema } from './LoginSchema';


export const Authorization = () => {
    return (
        <div className="authorization">
            <div className='form'>
                <h1 className='form__title text-center mb-3'>Trains Aggregator</h1>
                <Formik
                    initialValues={{ login: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => submitForm(values)} 
                >
                {({ touched, errors, isSubmitting, values }) => (
                    <Form>
                        <div className='form-group'>
                            <label 
                                htmlFor='login' 
                                className={`form__label mb-2  ${touched.login && errors.login ? "form__error" : ""}`}
                            >
                                Логин
                            </label>
                            <Field
                                name='login'
                                type='text'
                                className= {`form__control ${touched.login && errors.login ? "form__invalid" : ""}`}
                                autoFocus={true}
                                autoComplete="true"
                                value={values.login}
                            />
                            <ErrorMessage
                                component="span"
                                name='login'
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
