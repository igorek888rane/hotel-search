import {IResponse, paramsType} from "../redux/slices/authSlice/authTypes";
import axiosAuth from "../utils/axiosAuth";
import {HotelsParams, IHotels} from "../redux/slices/hotelsSlice/hotelsTypes";
import axios from "axios";


export const auth = async ({path, params}: paramsType) => {
    const {data} = await axiosAuth.post<IResponse>(`/auth/${path}`, params)
    return data;
}
export const getMe = async () => {
    const {data} = await axiosAuth.get<IResponse>(`/auth/me`)
    return data
}
export const getHotels = async ({location, checkIn, checkOut}: HotelsParams) => {
    const {data} = await
        axios
            .get<IHotels[]>
            (`${process.env.REACT_APP_HOTELS_API}location=${location}&lang=ru&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    return data
}