import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/useApp";
import {fetchMe} from "../redux/slices/authSlice/ActionCreator";
import Loader from "./UI/Loader/Loader";
import AuthRoutes from "./Routes/AuthRoutes";
import StartRoutes from "./Routes/StartRoutes";


const AppRouter: FC = () => {

    const {auth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(fetchMe())
    }, [])
    const {loading} = useAppSelector(state => state.auth)
    if (loading) {
        return <Loader size={200} marginTop={100}/>
    }
    return (
        <div className="App">
            {auth
                ? <AuthRoutes/>
                : <StartRoutes/>}
        </div>
    );
};

export default AppRouter;