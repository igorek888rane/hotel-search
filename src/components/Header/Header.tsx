import React, {FC} from 'react';
import styles from './Header.module.scss'
import logOutIcon from '../../assests/logout_icon.png'
import {useAppDispatch} from "../../hooks/useApp";
import {logOut} from "../../redux/slices/authSlice/authSlice";


const Header: FC = () => {
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        window.localStorage.removeItem('token')
        dispatch(logOut())
    }
    return (
        <div className={styles.header}>
            <div><h1>Simple Hotel Check</h1></div>
            <div className={styles.logOut}
                 onClick={logOutHandler}>
                <span>Выйти</span>
                <img src={logOutIcon} alt=""/>
            </div>
        </div>
    );
};

export default Header;