import React, {FC} from 'react';
import styles from "./FavoritesBlock.module.scss";
import SelectEl from "./SelectEl";

export type sortItemType = {
    sortName: string,
    name: string
}

const Sort: FC = () => {

    const sortItems: sortItemType[] = [{sortName: 'stars', name: 'Рейтинг'}, {sortName: 'priceAvg', name: 'Цена'}]
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