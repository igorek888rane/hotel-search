import React, {FC} from 'react';
import Header from "../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../hooks/useApp";
import {fetchHotels} from "../redux/slices/hotelsSlice/ActionCreator";
import {useEffect} from "react";
import HotelSearch from "../components/HotelSearch/HotelSearch";


const HotelSearchPage: FC = () => {
    const dispatch = useAppDispatch()
    const {locationInput,dateInput, countDayInput} = useAppSelector(state => state.search)

    const setDay = new Date(dateInput).setDate(new Date(dateInput).getDate() + +countDayInput)
    const dateOut = new Date(setDay).toISOString().split('T')[0]


    useEffect(() => {
        dispatch(fetchHotels({location:locationInput, checkIn: dateInput, checkOut: dateOut}))
    }, [])

    return (
        <div className={'hotel_search_page'}>
            <Header/>
            <HotelSearch dateOut={dateOut}/>
        </div>
    );
};

export default HotelSearchPage;


