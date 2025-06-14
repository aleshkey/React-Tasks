import {useState} from "react";
import styles from "./task1.module.scss"

export const Task1Component = () => {

    const [count, setCount] = useState(0);


    return (
        <div className={styles.content}>
            <p>Текущее значение: {count}</p>
            <div className={styles.buttonContainer}>
                <button onClick={() => setCount(count + 1)}>Увеличить</button>
                <button onClick={() => setCount(count - 1)}>Уменьшить</button>
            </div>
        </div>
    )
}