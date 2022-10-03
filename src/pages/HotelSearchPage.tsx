import React, {FC} from 'react';
// import HotelSearch from "../components/HotelSearch/HotelSearch";
import Header from "../components/Header/Header";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {getHotelsAc} from "../redux/reducers/hotelsReducer";

const HotelSearchPage: FC = () => {
    // const dispatch = useDispatch()
    // const {locationInput, dateInput, countDayInput} = useSelector(state => state.search)
    // const setDay= new Date(dateInput).setDate(new Date(dateInput).getDate() + +countDayInput)
    // const dateOut  = new Date(setDay).toISOString().split('T')[0]
    //
    // useEffect(() => {
    //     dispatch(getHotelsAc({locationInput, dateInput, dateOut}))
    // }, [])

    return (
        <div className={'hotel_search_page'}>
            <Header/>
            {/*<HotelSearch dateOut={dateOut}/>*/}
        </div>
    );
};

export default HotelSearchPage;


