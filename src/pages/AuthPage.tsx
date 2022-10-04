import React, {FC} from 'react';
import Form from "../components/Form/Form";
import Nav from "../components/Nav/Nav";

const AuthPage: FC = () => (
    <div className={'auth_page'}>
        <div className="content">
            <Nav/>
            <Form title={'Вход'}
                  buttonText={'Войти'}
                  reg={false}/>
        </div>
    </div>
);


export default AuthPage;