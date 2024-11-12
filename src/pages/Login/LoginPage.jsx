import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import React from 'react';
import * as Yup from 'yup';

import { LoginUserThunk } from '../../store/profileReducer';
import './LoginPage.css';

const LoginPage = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Please enter email'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter password'),
    });

    const onSubmit = (values) => {
        dispatch(LoginUserThunk(values.email, values.password))
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="login-form">
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error-message" />
                    </div>
                    <button type="submit" className="login-btn follow">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginPage;
