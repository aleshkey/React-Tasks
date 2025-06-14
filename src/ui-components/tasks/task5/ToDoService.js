import { nanoid } from 'nanoid';

export class ToDoService {

    constructor() {
        this._data = [];          // список задач
    }

    get data(){
        return this._data;
    }

    addTask(task) {
        const newTask = {
            id: nanoid(),
            task: task
        };
        this._data = [newTask, ...this._data];
        return newTask;
    }

    removeTask(id) {
        this._data = this._data.filter(t => t.id !== id);
    }

    updateTask(id, updates) {
        this._data = this._data.map(t => (t.id === id ? { ...t, ...updates } : t));
    }

    getTasksByPage(page = 1, pageSize = 7) {
        const totalItems = this._data.length;
        const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
        const currentPage = Math.min(Math.max(page, 1), totalPages);

        // ВАРИАНТ: берем только нужный кусок
        const start = (currentPage - 1) * pageSize;
        const end = currentPage * pageSize;
        const pageContent = this._data.slice(start, end);

        return { pageContent, totalItems, totalPages, currentPage };
    }
}