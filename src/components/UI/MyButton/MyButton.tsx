import React, {FC, PropsWithChildren} from 'react';
import './MyButton.module.scss'


interface IMyButtonProps {
    type?: 'submit';
}

const MyButton: FC<PropsWithChildren<IMyButtonProps>> = ({type, children}) => (
    <button type={type}>
        {children}
    </button>
);


export default MyButton;