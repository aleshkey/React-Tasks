import {useEffect, useState} from "react";
import _ from 'lodash';
import useDebounce from "../../../hooks/useDebounce.hook.js";

export const InputText = ({min, max}) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [touched, setTouched] = useState(false);

    const debouncedValue = useDebounce(inputValue, 600);

    useEffect(() => {
        if (touched) {
            if (debouncedValue.length > max) {
                setError(`Нельзя ввести больше чем ${max} символов`);
            } else if (debouncedValue.length < min) {
                setError(`Вам нужно ввести минимум ${min} символов`);
            } else {
                setError("");
            }
        }
    }, [debouncedValue, min, max, touched]);


    const changeInputValue = (event$) => {
        const { value } = event$.target;
        setInputValue(value);
        setTouched(true);
    }


    return (
        <>
            <input placeholder={"test"} onChange={changeInputValue}/>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}