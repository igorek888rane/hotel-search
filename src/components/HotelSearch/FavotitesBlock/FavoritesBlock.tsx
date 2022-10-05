import React, {FC, useMemo} from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from '../HotelSearch.module.scss'
import Sort from "./Sort";
import HotelEl from "../HotelEl";
import {useAppSelector} from "../../../hooks/useApp";

type favoritesBlockProps = {
    dateFormat: string,
}
const FavoritesBlock: FC<favoritesBlockProps> = ({dateFormat}) => {

        const {favoritesHotels} = useAppSelector(state => state?.hotels)
        const {sortName, sortBy} = useAppSelector(state => state?.sort)


        // const favoritesHotelsSort = useMemo(() => {
        //     return [...favoritesHotels]
        //         .sort((a, b) => sortBy === 'ASC'
        //             ? a[sortName] > b[sortName] ? 1 : -1
        //             : a[sortName] > b[sortName] ? -1 : 1)
        // }, [favoritesHotels, sortName, sortBy])
        const favoritesHotelsSort = favoritesHotels

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