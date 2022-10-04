import React, {FC} from 'react';
import {Formik, FormikErrors} from "formik";


import styles from './Form.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/useApp";
import {authUser} from "../../redux/slices/authSlice/ActionCreator";
import Loader from "../UI/Loader/Loader";


export type FormValues = {
    email: string,
    password: string,
    confirmPassword?:string,
}

interface AuthFormProps {
    title: string,
    buttonText: string,
    reg: boolean
}

const Form: FC<AuthFormProps> = ({title, buttonText, reg}) => {
    const dispatch = useAppDispatch()
    const {loadingAuth, message} = useAppSelector(state => state.auth)
    const initialValue: FormValues = {email: '', password: '',confirmPassword:''}
    return (
        <div className={styles.form_auth}>
            <h1>{title}</h1>
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
                   if(reg){
                       if(!values.confirmPassword){
                           errors.confirmPassword = 'Обязательное поле'
                       }else if(values.confirmPassword!==values.password){
                           errors.confirmPassword = 'Пароли не совпадают'
                       }
                   }

                    return errors;
                }}
                onSubmit={(values) => {
                    const data = {
                        path: reg ? 'register' : 'login',
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
                        {reg&&  <div className={`${styles.input_block} ${styles.password_block} `}>
                            <label style={errors.confirmPassword && touched.confirmPassword ? {color: 'red'} : {color: '#424242'}}
                                   htmlFor="password">Повторите пароль</label>
                            <MyInput
                                style={errors.confirmPassword && touched.confirmPassword ? {color: 'red'} : {color: '#424242'}}
                                name='confirmPassword'
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword}
                            />
                            <div className={styles.error}>
                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            </div>
                        </div>}
                        <div className={styles.btn_submit}>
                            {loadingAuth
                                ? <Loader width={30} height={30}/>
                                : <MyButton
                                    type="submit">{buttonText}</MyButton>}
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

export default Form;


