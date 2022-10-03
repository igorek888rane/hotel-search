import React, {FC, InputHTMLAttributes} from 'react';
import './MyInput.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    style?: { color: string },
}

const MyInput: FC<InputProps> = (props) => (<input {...props} />);


export default MyInput;