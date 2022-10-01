import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import HotelSearchPage from "../pages/HotelSearchPage";
import AuthPage from "../pages/AuthPage";

const AppRouter :FC= () => {
    const auth  = false
    return (
        <div className="App">
            {auth
                ? <Routes>
                    <Route path={''} element={<HotelSearchPage/>}/>
                </Routes>
                : <Routes>
                    <Route path={''} element={<AuthPage/>}/>
                </Routes>}
        </div>
    );
};

export default AppRouter;