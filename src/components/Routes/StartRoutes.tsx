import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "../../pages/AuthPage";
import RegPage from "../../pages/RegPage";

const StartRoutes: FC = () => (
    <Routes>
        <Route path={'/login'} element={<AuthPage/>}/>
        <Route path={'/register'} element={<RegPage/>}/>
        <Route path={'*'} element={<Navigate to={'/login'}/>}/>
    </Routes>);


export default StartRoutes;