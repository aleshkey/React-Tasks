import {usePaginatedTasks} from "../../../hooks/usePaginatedTasks.hook.js";

export const ToDoList = () => {

    const {
        items,
        inputValue,
        hasMore,
        changeInputValue,
        handleAdd,
        nextPage,
    } = usePaginatedTasks();


    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    placeholder={"название таски"}
                    onChange={changeInputValue}
                />
                <button
                    onClick={handleAdd}
                >создать
                </button>
            </div>

            <ul>
                {items.map(item => (
                    <ListItem item={item}/>
                ))}
            </ul>
            {hasMore && (
                <button
                    onClick={nextPage}
                >
                    Загрузить ещё
                </button>
            )}

        </div>
    )
}

const ListItem = ({item}) => {
    return (
        <>
            <li key={item.id}>{item.task}</li>
        </>
    )
}