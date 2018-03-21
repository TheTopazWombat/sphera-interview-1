const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

function toDoReducer(state = { todos: [] }, action) {
    switch(action.type) {
        case ADD_TODO:
            // return Object.assign(state, {});
            return { ...state, todos: [...state.todos, {
                id: action.id,
                itemText: action.itemText,
                completed: false,
            }] }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(e => {
                    if (e.id === action.id) {
                        return {...e, completed: !e.completed}
                    } else {
                        return e;
                    }
                })
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(e => {
                    return e.id !== action.id;
                })
            }
        default: 
            return state;
    }
}

export default function createReducer(injectedReducers) {
    return toDoReducer;
}