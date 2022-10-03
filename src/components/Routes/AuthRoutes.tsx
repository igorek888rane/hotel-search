import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HotelSearchPage from "../../pages/HotelSearchPage";

const AuthRoutes: FC = () => {

    return (
        <Routes>
            <Route path={''} element={<HotelSearchPage/>}/>
            <Route path={'*'} element={<Navigate to={''}/>}/>
        </Routes>
    );
};

export default AuthRoutes;