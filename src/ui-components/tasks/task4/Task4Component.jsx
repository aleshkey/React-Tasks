/*export const Task4Component = () => {
    let count = 0;
    const handleIncreaseCount = () => {
        count += 1;
        console.log(count)
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncreaseCount}>Increase</button>
        </>
    );
}*/

/*
* исправил чтоб ререндер происходил
* */

import {useState} from "react";

export const Task4Component = () => {
    const [count, setCount] = useState(0);
    const handleIncreaseCount = () => {
        setCount(count+1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncreaseCount}>Increase</button>
        </>
    );
}