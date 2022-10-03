import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import './MyButton.module.scss'



const MyButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children,...props}) => (
    <button {...props}>
        {children}
    </button>
);


export default MyButton;