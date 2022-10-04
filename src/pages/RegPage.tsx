import React, {FC} from 'react';
import AuthForm from "../components/AuthForm/AuthForm";
import Nav from "../components/Nav/Nav";

const RegPage: FC = () => (
    <div className={'auth_page'}>
        <div className="content">
            <Nav/>
            <AuthForm title={'Регистрация'}
                      buttonText={'Зарегистрироваться'}
                      reg={true}/>
        </div>
    </div>
);


export default RegPage;