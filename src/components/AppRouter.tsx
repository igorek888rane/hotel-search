import React, {FC, useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HotelSearchPage from "../pages/HotelSearchPage";
import AuthPage from "../pages/AuthPage";
import {useAppDispatch, useAppSelector} from "../hooks/useApp";
import {fetchMe} from "../redux/slices/authSlice/ActionCreator";
import Loader from "./UI/Loader/Loader";

const AppRouter: FC = () => {

    const {auth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchMe())
    }, [])
    const {loading} = useAppSelector(state => state.auth)
    if (loading) {
        return <Loader/>
    }
    return (
        <div className="App">
            {auth
                ? <Routes>
                    <Route path={''} element={<HotelSearchPage/>}/>
                    <Route path={'*'} element={<Navigate to={''}/>}/>
                </Routes>
                : <Routes>
                    <Route path={'/login'} element={<AuthPage/>}/>
                    <Route path={'/register'} element={<AuthPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/register'}/>}/>
                </Routes>}
        </div>
    );
};

export default AppRouter;