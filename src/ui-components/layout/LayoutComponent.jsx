import { Link, Outlet } from "react-router-dom";
import styles from './layout.module.scss';

export const LayoutComponent = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Link to="task1">task 1</Link>
                <Link to="task2">task 2</Link>
                <Link to="task3">task 3</Link>
                <Link to="task4">task 4</Link>
                <Link to="task5">task 5</Link>
            </div>
            <Outlet />
        </>
    );
};
