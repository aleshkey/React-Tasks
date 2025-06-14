import {useState} from "react";
import styles from "./task1.module.scss"

export const Task1Component = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black")

    const changeState = (increment) => {
        setCount(prev => {
            const newCount = prev + increment;
            setColor(newCount > 10 ? 'red' : 'black');
            return newCount;
        })
    };

    return (
        <div className={styles.content}>
            <p style={{ color }}>Текущее значение: {count}</p>
            <div className={styles.buttonContainer}>
                <button onClick={() => changeState(1)}>
                    Увеличить
                </button>
                <button onClick={() => changeState(-1)}>
                    Уменьшить
                </button>
            </div>
        </div>
    )
}