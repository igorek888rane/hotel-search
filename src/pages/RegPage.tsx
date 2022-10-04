import React, {FC} from 'react';
import Form from "../components/Form/Form";
import Nav from "../components/Nav/Nav";

const RegPage: FC = () => (
    <div className={'auth_page'}>
        <div className="content">
            <Nav/>
            <Form title={'Регистрация'}
                  buttonText={'Зарегистрироваться'}
                  reg={true}/>
        </div>
    </div>
);


export default RegPage;