import {IResponse, paramsType} from "../redux/slices/authSlice/authTypes";
import axios from "../utils/axiosInstance";


export const auth = async ({path, params}: paramsType) => {
    const {data} = await axios.post<IResponse>(`/auth/${path}`, params)
    return data;
}
export const getMe = async () => {
    const {data} = await axios.get<IResponse>(`/auth/me`)
    return data
}
