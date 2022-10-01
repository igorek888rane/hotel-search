import React, {FC} from 'react';
import {Formik, FormikErrors} from "formik";


import styles from './AuthForm.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

type FormValues = {
    email: string,
    password: string,
}
const AuthForm: FC = () => {
    const initialValue: FormValues = {email: '', password: ''}
    return (
        <div className={styles.form_auth}>
            <h1>Simple Hotel Check</h1>
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
                    } else if (!/[0-9a-zA-Z!@#$%^&*]{8,}/g.test(values.password)) {
                        errors.password = ' Минимум 8 символов'
                    }
                    return errors;
                }}
                onSubmit={() => {
                    window.localStorage.setItem('auth', 'true')

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
                            <label style={errors.email && touched.email ? {color: 'red'} : {color:'#424242'}}
                                htmlFor="email">Логин</label>
                            <MyInput
                                style={errors.email && touched.email ? {color: 'red'} : {color:'#424242'}}
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
                            <label style={errors.password && touched.password ? {color: 'red'} : {color:'#424242'}}
                                htmlFor="password">Пароль</label>
                            <MyInput
                                style={errors.password && touched.password ? {color: 'red'} : {color:'#424242'}}
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
                            <MyButton type="submit">
                                Войти
                            </MyButton>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default AuthForm;


