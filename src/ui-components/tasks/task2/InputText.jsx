import {useState} from "react";
import _ from 'lodash';

export const InputText = ({min, max}) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const debouncedValidation = _.debounce((value) => {
        if (value.length > max) {
            setError(`Нельзя ввести больше чем ${max} символов`);
            return;
        }
        if (value.length < min) {
            setError(`Вам нужно ввести минимум ${min} символов`);
            return;
        }
        setError("");
    }, 600);


    const changeInputValue = (event$) => {
        const { value } = event$.target;
        setInputValue(value);
        debouncedValidation(value);
    }


    return (
        <>
            <input placeholder={"test"} onChange={changeInputValue}/>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}