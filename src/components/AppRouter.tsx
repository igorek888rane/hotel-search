import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HotelSearchPage from "../pages/HotelSearchPage";
import AuthPage from "../pages/AuthPage";
import {useAppSelector} from "../hooks/useApp";

const AppRouter: FC = () => {

    const {message} = useAppSelector(state => state.auth)
    return (
        <div className="App">
            {message === 'success'
                ? <Routes>
                    <Route path={''} element={<HotelSearchPage/>}/>
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