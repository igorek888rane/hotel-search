import axios from "axios";
import {IResponse, paramsType} from "../redux/slices/authSlice/authTypes";


export const auth = async ({path, params}: paramsType) => {
    const {data} = await axios.post<IResponse>(`${process.env.REACT_APP_AUTH_API}/auth/${path}`, params)
    return data;
}