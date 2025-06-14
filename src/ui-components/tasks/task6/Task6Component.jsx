import {useEffect, useState} from "react";

export const Task6Component = () => {
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            console.log(flag)  // тут необходимо выводить актуальное значене в консоль каждую секунду
        }, 1000);
        return () => {
            clearInterval(id);
        }
    }, [flag])

    const array = [{name: 'Alexandr'}, {name: 'Valery'}, {name: 'Alex'}]; // я бы вынес на уровеь сервисов (уровень где обращаемся к апи)

    const handleButtonClick = () => {
        setFlag(!flag);
    };

    const getButtonTitle = () => {
        return flag ? <h1>Show list</h1> : <h1>Hide list</h1>;
    };

    return (
        <div>
            <div style={{marginBottom: '10px'}}>List employees</div> {/*насколько я знаю лучше css выносить в отдельный файл*/}

            <button onClick={() => handleButtonClick()}>{getButtonTitle()}</button>

            {flag
                && array.map((item) => <p key={item.name}>{item.name}</p>) /// лучше заменить на id, но в модели только имя есть
            }
        </div>
    );
}