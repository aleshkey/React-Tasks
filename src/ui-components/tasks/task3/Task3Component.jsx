import useFocus from "../../../hooks/useFocus.hook.js";

export const Task3Component = () => {
    const { ref: inputRef, setFocus } = useFocus();

    return (
        <>
            <input
                type="text"
                placeholder="фокус"
                ref={inputRef}
            />
            <button onClick={setFocus}>
                Поставить фокус на поле
            </button>
        </>
    );
}