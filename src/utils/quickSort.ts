import {IHotel} from "../redux/slices/hotelsSlice/hotelsTypes";
import {sortNameEnum} from "../redux/slices/sortSlice/sortTypes";


export const quickSort = (array: IHotel[], sortName: sortNameEnum): IHotel[] => {
    if (array.length <= 1) {
        return array
    }

    let middleIndex = Math.floor(array.length / 2)
    let middleEl: IHotel = array[middleIndex]
    let less: IHotel[] = []
    let greater: IHotel[] = []
    array.forEach((el: IHotel, i: number) => {
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
