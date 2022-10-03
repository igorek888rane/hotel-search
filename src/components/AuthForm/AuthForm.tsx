import React, {FC} from 'react';
import {Formik, FormikErrors} from "formik";


import styles from './AuthForm.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/useApp";
import {authUser} from "../../redux/slices/authSlice/ActionCreator";
import {useLocation} from "react-router-dom";
import Loader from "../UI/Loader/Loader";


export type FormValues = {
    email: string,
    password: string,
}
const AuthForm: FC = () => {
    const dispatch = useAppDispatch()
    const {loadingAuth, message} = useAppSelector(state => state.auth)
    const location = useLocation()

    const initialValue: FormValues = {email: '', password: ''}
    return (
        <div className={styles.form_auth}>
            <h1>{location.pathname === '/login'
                ? 'Вход'
                : 'Регистрация'}
            </h1>
            <Formik
                initialValues={initialValue}
                validate={values => {
                    const errors: FormikErrors<FormValues> = {};
                    if (!values.email) {
                        errors.email = 'Обязательное поле';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Некорректный адресс почты ';
                    }
                    if (!values.password) {
                        errors.password = 'Обязательное поле'
                    } else if (!/(?=.*[a-z0-9])/g.test(values.password)) {
                        errors.password = 'Не должен содержать кириллицу'
                    } else if (!/[0-9a-zA-Z!@#$%^&*]{3,}/g.test(values.password)) {
                        errors.password = ' Минимум 3 символов'
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    const data = {
                        path: location.pathname === '/login' ? 'login' : 'register',
                        params: {email: values.email, password: values.password}
                    }
                    dispatch(authUser(data))
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,

                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`${styles.input_block} ${styles.email_block} `}>
                            <label style={errors.email && touched.email ? {color: 'red'} : {color: '#424242'}}
                                   htmlFor="email">Логин</label>
                            <MyInput
                                style={errors.email && touched.email ? {color: 'red'} : {color: '#424242'}}
                                name="email"
                                type="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                            />
                            <div className={styles.error}>
                                {errors.email && touched.email && errors.email}
                            </div>
                        </div>
                        <div className={`${styles.input_block} ${styles.password_block} `}>
                            <label style={errors.password && touched.password ? {color: 'red'} : {color: '#424242'}}
                                   htmlFor="password">Пароль</label>
                            <MyInput
                                style={errors.password && touched.password ? {color: 'red'} : {color: '#424242'}}
                                name='password'
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                            />
                            <div className={styles.error}>
                                {errors.password && touched.password && errors.password}
                            </div>
                        </div>

                        <div className={styles.btn_submit}>
                            {loadingAuth
                                ? <Loader width={30} height={30}/>
                                : <MyButton type="submit">
                                    {location.pathname === '/login'
                                        ? 'Войти'
                                        : 'Зарегистрироватсья'}
                                </MyButton>}
                            <div className={styles.message}>
                                {!loadingAuth && message && message !== 'success' && <span>{message}</span>}
                            </div>
                        </div>


                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AuthForm;


