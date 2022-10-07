import React, {FC, useMemo} from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from '../HotelSearch.module.scss'
import Sort from "./Sort";
import HotelEl from "../HotelEl";
import {useAppSelector} from "../../../hooks/useApp";
import {quickSort} from "../../../utils/quickSort";

export type dateFormatProps = {
    dateFormat: string,
}

const FavoritesBlock: FC<dateFormatProps> = ({dateFormat}) => {

        const {favoritesHotels} = useAppSelector(state => state?.hotels)
        const {sortName, sortBy} = useAppSelector(state => state?.sort)


        const favoritesHotelsSort = useMemo(() => {
            if (sortBy === 'ASC') {
                return quickSort(favoritesHotels, sortName)
            } else {
                return quickSort(favoritesHotels, sortName).reverse()
            }
        }, [favoritesHotels,quickSort, sortName, sortBy])


        return (
            <div className={`${styles.favorites_block} ${s.block}`}>
                <h1 style={{textAlign: "start"}}>Избранное</h1>
                {favoritesHotelsSort.length ?
                    <>
                        <Sort/>
                        <div className={styles.favorites}>
                            {favoritesHotelsSort?.map(hotel => <HotelEl key={hotel.hotelId}
                                                                        hotel={hotel}
                                                                        allHotels={false}
                                                                        dateFormat={dateFormat}/>)}
                        </div>
                    </>
                    : <h1 style={{marginTop: '20px'}}>У вас нет избранных отелей</h1>}
            </div>
        );
    }
;

export default FavoritesBlock;