import React, {FC} from 'react';
// import HotelSearch from "../components/HotelSearch/HotelSearch";
import Header from "../components/Header/Header";
import {useAppDispatch, useAppSelector} from "../hooks/useApp";
import {fetchHotels} from "../redux/slices/hotelsSlice/ActionCreator";
import {useEffect} from "react";


const HotelSearchPage: FC = () => {
    const dispatch = useAppDispatch()
    const {hotels} = useAppSelector(state => state.hotels)
    // const {locationInput, dateInput, countDayInput} = useSelector(state => state.search)
    // const setDay= new Date(dateInput).setDate(new Date(dateInput).getDate() + +countDayInput)
    // const dateOut  = new Date(setDay).toISOString().split('T')[0]
    //
    useEffect(() => {
        dispatch(fetchHotels({city: 'Moskow', checkIn: '2022-10-05', checkOut: '2022-10-06'}))
    }, [dispatch])
    console.log(hotels);
    return (
        <div className={'hotel_search_page'}>
            <Header/>
            {/*<HotelSearch dateOut={dateOut}/>*/}
        </div>
    );
};

export default HotelSearchPage;


