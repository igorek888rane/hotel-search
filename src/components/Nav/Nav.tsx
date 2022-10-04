import React from 'react';
import  './Nav.scss'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useApp";
import {setErrorMessage} from "../../redux/slices/authSlice/authSlice";

const Nav = () => {
    const dispatch = useAppDispatch()
    const clickHandler = ()=>{
        dispatch(setErrorMessage(''))
    }
    return (
        <nav className={'nav'}>
            <NavLink onClick={clickHandler} to={'/login'}>Вход</NavLink>
            <NavLink onClick={clickHandler} to={'/register'}>Регистрация</NavLink>
        </nav>);
}


export default Nav;