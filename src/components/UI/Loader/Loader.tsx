import React, {FC} from 'react';
import styles from './Loader.module.scss';

const Loader: FC = () => {
    return (
        <>
            <div className={styles.loader}>
                <h1>Загрузка...</h1>
            </div>
            <div className={styles.loader_block}></div>
        </>
    );
};

export default Loader;