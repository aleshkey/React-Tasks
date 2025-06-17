import {memo, useEffect, useRef, useState} from "react";

const FilterProducts = () => {
    const [products, setProducts] = useState([
        {type: 'Banana', price: '4$'},
        {type: 'Kiwi', price: '3$'},
        {type: 'Melon', price: '6$'},
    ]); // лучше вынести в отдельную логику


    const inputRef = useRef('');

    useEffect(() => {
        setTimeout(() => {
            console.log(inputRef.current.value);
        }, 3000);
    }, [inputRef]);

    const handleButtonClick = () =>
        setProducts(
            products.filter(
                (item) =>
                    item.message.includes(inputRef.current.value) ||
                    item.price.includes(inputRef.current.value)
            )
        );


    return (
        <>
            <input type="text" placeholder="Name product or price" ref={inputRef}/>
            <button onClick={handleButtonClick}>search</button>
            {products.map((item) => (
                <div key={item.type} style={{width: '100px', display: 'flex', alignItems: 'center'}}>
                    <p style={{width: '50px'}}>{item.type}</p>
                    <span>{item.price}</span>
                </div>
            ))}
        </>
    ); // стили лучше вынести в css
};

const FilterProductsMemo = memo(FilterProducts);

export default FilterProductsMemo;