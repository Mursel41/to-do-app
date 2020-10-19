import { IS_LOADING, HAS_ERROR, STORE_DATA } from '../actions';

const initialState = {
    articles: [],
    isLoading: false,
    hasError: false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: true, hasError: false };
        case HAS_ERROR:
                return { ...state, isLoading: false, hasError: true };
        case STORE_DATA:
                return { ...state, articles: action.data.data.articles, isLoading: false };
        default:
            return state;        
    }
}

export default newsReducer;