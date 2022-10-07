import React, {FC} from 'react';
import styles from "./FavoritesBlock.module.scss";
import SelectEl from "./SelectEl";
import {sortNameEnum} from "../../../redux/slices/sortSlice/sortTypes";

export type sortItemType = {
    sortName:sortNameEnum,
    name: string
}

const Sort: FC = () => {

    const sortItems: sortItemType[] = [{sortName: sortNameEnum.stars, name: 'Рейтинг'}, {sortName: sortNameEnum.price, name: 'Цена'}]
    return (
        <div className={styles.filter}>
            {
                sortItems.map(sort => <SelectEl key={sort.sortName}
                                                sort={sort}/>)
            }
        </div>
    );
};

export default Sort;