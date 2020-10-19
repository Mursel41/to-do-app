import { ADD_TODO, TOGGLE_TODO } from '../actions';
import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, { id: uuidv4(), text: action.text, done: false }]
        case TOGGLE_TODO:
            return state.map(item => item.id === action.id ? { ...item, done: !item.done } : item);
        default:
            return state;
    }    
};

export default todoReducer;