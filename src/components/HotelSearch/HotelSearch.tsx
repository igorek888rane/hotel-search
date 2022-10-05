import React, {FC} from 'react';
import styles from './HotelSearch.module.scss'
import SearchBlock from "./SearchBlock/SearchBlock";
import {useAppSelector} from "../../hooks/useApp";


export interface dateOutProps {
    dateOut: string,
}

const HotelSearch: FC<dateOutProps> = ({dateOut}) => {
     const {info} = useAppSelector(state => state?.search)

    const dateFormat = new Date(info.date)
        .toLocaleDateString('ru-RU', {day: '2-digit', month: 'long', year: 'numeric'})
        .replace('г.', '')

    return (
        <div className={styles.hotel_search_block}>
            <SearchBlock dateOut={dateOut}/>
            {/*<FavoritesBlock  dateFormat={dateFormat}/>*/}
            {/*<HotelsBlock dateFormat={dateFormat}/>*/}
        </div>
    );
};

export default HotelSearch;