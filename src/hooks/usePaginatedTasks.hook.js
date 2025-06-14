import { useEffect, useState, useMemo, useCallback } from "react";
import { ToDoService } from "../ui-components/tasks/task5/ToDoService.js";

export function usePaginatedTasks(initialPage = 1, pageSize = 7) {
    const service = useMemo(() => new ToDoService(), []);
    const [items, setItems] = useState([]);     // все загруженные таски
    const [page, setPage] = useState(initialPage);
    const [hasMore, setHasMore] = useState(true);
    const [inputValue, setInputValue] = useState("");

    const [totalPages, setTotalPages] = useState(1);

    const loadPage = useCallback(
        (pageNumber) => {
            const { pageContent, currentPage, totalPages } = service.getTasksByPage(pageNumber, pageSize);

            if (pageNumber === initialPage) {
                setItems(pageContent);
            } else {
                setItems((prev) => [...prev, ...pageContent]);
            }

            setTotalPages(totalPages);
            setHasMore(currentPage < totalPages);
        },
        [service, initialPage, pageSize]
    );

    useEffect(() => {
        loadPage(page);
    }, [page, loadPage]);

    const changeInputValue = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleAdd = useCallback(() => {
        const title = inputValue.trim();
        if (!title) return;

        service.addTask(title);
        setInputValue("");
        loadPage(page)
    }, [page, inputValue, service, initialPage]);

    const nextPage = useCallback(() => {
        if (hasMore) setPage((prev) => prev + 1);
    }, [hasMore]);

    const reset = useCallback(() => {
        setPage(initialPage);
    }, [initialPage]);

    return {
        items,
        inputValue,
        hasMore,
        changeInputValue,
        handleAdd,
        nextPage,
        reset,
    };
}
