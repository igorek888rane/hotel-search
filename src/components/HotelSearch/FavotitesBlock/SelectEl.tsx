import React, {FC} from 'react';
import styles from "./FavoritesBlock.module.scss";
import ArrowEl from "./ArrowEl";
import {useAppDispatch, useAppSelector} from "../../../hooks/useApp";
import {changeSortName} from "../../../redux/slices/sortSlice/sortSlice";
import {sortItemType} from "./Sort";


const SelectEl: FC<{ sort: sortItemType }> = ({sort}) => {
    const {sortName} = useAppSelector(state => state.sort)
    const dispatch = useAppDispatch()
    const sortByItems = ['ASC', 'DESC']
    return (
        <div onClick={() => dispatch(changeSortName(sort.sortName))}
             className={`${styles.select} ${sort.sortName === sortName ? styles.active : ''}`}>
            <span>{sort.name}</span>
            <div className={styles.arrow}>
                {sortByItems.map(sortByItem => <ArrowEl key={sortByItem}
                                                        sortByItem={sortByItem}
                                                        sort={sort}/>)}
            </div>
        </div>
    );
};

export default SelectEl;