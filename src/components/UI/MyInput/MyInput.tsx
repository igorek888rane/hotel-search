import React, {ChangeEvent, FocusEvent, FC} from 'react';
import './MyInput.module.scss'

interface InputProps {
    type?: string;
    name?: 'password' | 'email'  | 'confirmPassword';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
    value?: string;
    style?:{color:string},
}

const MyInput: FC<InputProps> = (props) => (<input {...props} />);


export default MyInput;