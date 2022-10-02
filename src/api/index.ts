import axios from "axios";
import {IResponse, paramsType} from "../redux/slices/authSlice/authTypes";


export const auth = async ({path, params}: paramsType) => {
    const {data} = await axios.post<IResponse>(`http://localhost:5000/auth/${path}`, params)
    return data;
}