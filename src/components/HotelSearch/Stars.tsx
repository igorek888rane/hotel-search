import React, {FC} from 'react';
import styles from './HotelSearch.module.scss'
import starFull from '../../assests/starsFull.png'
import starNull from '../../assests/starsNull.png'

type starsProps = {
    stars:number
}
const Stars: FC<starsProps> = ({stars}) => {
    if (stars === 5) {
        const starArr = [...new Array(stars)]
        return (
            <div className={styles.stars}>
                {starArr.map((_, i) => <img key={i} src={starFull} alt=""/>)}
            </div>
        )
    }
    const noStars = 5 - stars
    const starArr = [...new Array(stars)]
    const noStarArr = [...new Array(noStars)]

    return (
        <div className={styles.stars}>
            {starArr.map((_, i) => <img key={i} src={starFull} alt=""/>)}
            {noStarArr.map((_, i) => <img key={i} src={starNull} alt=""/>)}
        </div>
    )


};

export default Stars;


