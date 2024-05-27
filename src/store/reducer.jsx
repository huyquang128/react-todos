import {
    ADD_JOB,
    DELETE_JOB,
    EDITING_JOB,
    END_EDIT_JOB,
    SET_JOB,
    START_EDIT_JOB,
} from './constants';

const initState = {
    todos: [],
    todoInput: '',
    editIndex: null,
    editInput: '',
};

function reducer(state, action) {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: '',
            };
        case DELETE_JOB:
            const curTodos = [...state.todos];
            curTodos.splice(action.payload, 1);
            return {
                todos: [...curTodos],
            };
        case START_EDIT_JOB:
            return {
                ...state,
                editIndex: action.payload.index,
                editInput: action.payload.todo,
            };
        case EDITING_JOB:
            return {
                ...state,
                editInput: action.payload,
            };
        case END_EDIT_JOB:
            state.todos[state.editIndex] = action.payload;
            return {
                ...state,
                todos: [...state.todos],
                editIndex: null,
            };
        default:
            throw new Error('Invalid...');
    }
}

export { initState };
export default reducer;
