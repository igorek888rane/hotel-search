import {IFavoriteHotel} from "../redux/slices/hotelsSlice/hotelsTypes";
import {sortNameEnum} from "../redux/slices/sortSlice/sortTypes";


export const quickSort = (array:IFavoriteHotel[], sortName: sortNameEnum): IFavoriteHotel[] => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let middleEl: IFavoriteHotel = array[middleIndex]
    let less: IFavoriteHotel[] = []
    let greater: IFavoriteHotel[] = []
    array.forEach((el: IFavoriteHotel, i: number) => {
        if (i === middleIndex) {
            return
        }
        if (el[sortName] < middleEl[sortName]) {
            less.push(el)
        } else {
            greater.push(el)
        }
    })
    return [...quickSort(less, sortName), middleEl, ...quickSort(greater, sortName)]
};
