let id = 0;

export const addTodo = (itemText) => {
    return {
        type: 'ADD_TODO',
        id: id++,
        itemText
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}