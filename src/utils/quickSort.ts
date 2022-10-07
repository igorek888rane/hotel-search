import {IHotel} from "../redux/slices/hotelsSlice/hotelsTypes";




export  const quickSort = (array: IHotel[], sortName: string): IHotel[] => {
    if (array.length <= 1) {
        return array
    }
    let middleIndex = Math.floor(array.length / 2)
    let middleEl: any = array[middleIndex]
    let less: IHotel[] = []
    let greater: IHotel[] = []
    array.forEach((el:any, i: number) => {
        if (i === middleIndex) {
            return
        }
        if (el[sortName] < middleEl[sortName]) {
            less.push(el)
        }else {
            greater.push(el)
        }
    })
    return [...quickSort(less, sortName), middleEl, ...quickSort(greater, sortName)]
};
