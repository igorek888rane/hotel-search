import axios from "../utils/axiosInstance";
import {IFavoriteHotel, IHotel} from "../redux/slices/hotelsSlice/hotelsTypes";


export const addFavorites = async (hotel:IHotel) => {
    const {data} = await axios.post<IFavoriteHotel>('/favorite/addFavorite',hotel)
    return data
}
export const deleteFavorites = async (id:number) => {
    const {data} = await axios.delete<IFavoriteHotel>(`/favorite/deleteFavorite/${id}`)
    return data
}
export const getFavorites = async () => {
    const {data} = await axios.get('/favorite/getFavorite')
    return data
}