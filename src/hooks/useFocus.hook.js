import {useCallback, useRef} from "react";

function useFocus() {
    const ref = useRef(null);

    const setFocus = useCallback(() => {
        ref.current?.focus();
    }, []);

    return { ref, setFocus };
}

export default useFocus