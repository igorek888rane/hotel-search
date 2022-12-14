import {HotelsParams, IHotel} from "../redux/slices/hotelsSlice/hotelsTypes";
import axios from "axios";

export const getHotels = async ({location, checkIn, checkOut}: HotelsParams) => {
    const {data} = await
        axios
            .get<IHotel[]>
            (`${process.env.REACT_APP_HOTELS_API}location=${location}&lang=ru&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    return data
}