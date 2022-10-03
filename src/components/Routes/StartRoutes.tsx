import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "../../pages/AuthPage";

const StartRoutes:FC = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<AuthPage/>}/>
            <Route path={'/register'} element={<AuthPage/>}/>
            <Route path={'*'} element={<Navigate to={'/login'}/>}/>
        </Routes>
    );
};

export default StartRoutes;