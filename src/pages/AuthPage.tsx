import React, {FC} from 'react';
import AuthForm from "../components/AuthForm/AuthForm";
import Nav from "../components/Nav/Nav";

const AuthPage: FC = () => (
    <div className={'auth_page'}>
        <div className="content">
            <Nav/>
            <AuthForm title={'Вход'}
                      buttonText={'Войти'}
                      reg={false}/>
        </div>
    </div>
);


export default AuthPage;