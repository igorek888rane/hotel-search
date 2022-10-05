import React, {ChangeEvent, FC, FormEvent} from 'react';


import styles from "./SearchBlock.module.scss";
import s from '../HotelSearch.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {changeCountDay, changeDate, changeInfo, changeLocation} from "../../../redux/slices/searchSlice/searchSlice";
import {fetchHotels} from "../../../redux/slices/hotelsSlice/ActionCreator";
import {dateOutProps} from "../HotelSearch";



const SearchBlock: FC<dateOutProps> = ({dateOut}) => {
    const {locationInput, dateInput, countDayInput} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchHotels({location: locationInput, checkIn: dateInput, checkOut: dateOut}))
        dispatch(changeInfo({location: locationInput, date: dateInput, countDay: countDayInput}))
    }
    return (
        <div className={`${styles.search_block} ${s.block}`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Локация</label>
                    <MyInput
                        type="text"
                        id="location"
                        name="location"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeLocation(e.target.value))}
                        value={locationInput}/>
                </div>
                <div className={styles.date}>
                    <label htmlFor="date">Дата заселения</label>
                    <MyInput
                        type='date'
                        id="date"
                        name="date"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeDate(e.target.value))}
                        value={dateInput}/>
                </div>
                <div className={styles.count_day}>
                    <label htmlFor="count">Количество дней</label>
                    <MyInput
                        type="text"
                        id="countDay"
                        name="countDay"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeCountDay(+e.target.value))}
                        value={countDayInput}/>
                </div>
                <div className={styles.btn}>
                    <MyButton type={'submit'}>Найти</MyButton>
                </div>
            </form>
        </div>
    );
};

export default SearchBlock;


