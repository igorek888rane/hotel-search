import React, {FC} from 'react';
import AuthForm from "../components/AuthForm/AuthForm";
import {NavLink} from "react-router-dom";

const AuthPage: FC = () => {
    return (
        <div className={'auth_page'}>
            <div className="content">
                <nav className={'nav'}>
                    <NavLink to={'/login'}>Вход</NavLink>
                    <NavLink to={'/register'}>Регистрация</NavLink>
                </nav>
                <AuthForm/>

            </div>
        </div>

    );
};

export default AuthPage;