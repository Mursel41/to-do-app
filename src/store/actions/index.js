import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const IS_LOADING = 'IS_LOADING';
export const HAS_ERROR = 'HAS_ERROR';
export const STORE_DATA = 'STORE_DATA';

export const addTodoAction = text => ({
    type: ADD_TODO,
    text
});

export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    id
});

export const handleAxiosErrorAction = error => ({
    type: HAS_ERROR,
    data: error
});

export const storeNewsDataAction = data => ({
    type: STORE_DATA,
    data
});

// Thunk!
export const getNewsAction = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    try {
        const apiKey = 'c7cb42bef187493284ed5063054a0b5d';
        const data = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
        dispatch(storeNewsDataAction(data));
    } catch (error) {
        dispatch(handleAxiosErrorAction(error));
    }
}