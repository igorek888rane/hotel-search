import React, {FC} from 'react';
import styles from "./HotelsBlock.module.scss";

const CarouselEL: FC<{ img: string }> = ({img}) => (
    <div className={styles.carousel_item}>
        <img src={`/carousel/${img}`} alt=""/>
    </div>
);


export default CarouselEL;

