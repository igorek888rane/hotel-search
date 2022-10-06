import React, {FC} from 'react';
import styles from "./HotelsBlock.module.scss";
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import CarouselEL from "./CarouselEL";
import HotelEl from "../HotelEl";
import {useAppSelector} from "../../../hooks/useApp";
import {dateFormatProps} from "../FavotitesBlock/FavoritesBlock";
import Loader from "../../UI/Loader/Loader";

const carouselImg: string[] = ['1.png', '2.png', '3.png', '3.png']

const HotelsBlock: FC<dateFormatProps> = ({dateFormat}) => {
    const {hotels, favoritesHotels, loading} = useAppSelector(state => state?.hotels)
    const {info} = useAppSelector(state => state?.search)
    return (
        <div className={`${styles.hotels_block} ${s.block}`}>
            <div className={styles.info}>
                <span>Отели<img src={arrow} alt=""/>{info.location}</span>
                <span className={styles.date}>{dateFormat}</span>
            </div>
            <div className={styles.carousel}>
                <div className={styles.carousel_inner}>
                    {carouselImg.map((img, i) => <CarouselEL key={i} img={img}/>)}
                </div>
            </div>
            <div className={styles.add_count}>
                <p>Добавлено в Избранное: <span>{favoritesHotels.length}</span> отеля</p>
            </div>
            <div className={styles.hotels_items}>
                {
                    loading
                        ? <Loader size={150} marginTop={50}/>
                        : hotels.map(hotel => <HotelEl key={hotel.hotelId}
                                                       allHotels={true}
                                                       hotel={hotel}
                                                       dateFormat={dateFormat}/>)
                }

            </div>

        </div>

    );
};

export default HotelsBlock;