import React, {FC} from 'react';
import styles from './Loader.module.scss';

interface loaderProps {
    width: number,
    height: number,
    marginTop?:number
}

const Loader: FC<loaderProps> = ({width, height,marginTop}) => {
    return (
        <div className={styles.loader_block} style={{marginTop:`${marginTop}px`}}>
            {width >= 150 && height >= 150 && <div className={styles.text}>
                <span>Загрузка...</span>
            </div>}
            <div style={{width: `${width}px`, height: `${height}px`}}
                 className={styles.loader}></div>
        </div>
    );
};

export default Loader;