import { Types } from '../actions/character';
import produce from 'immer';

const INITIAL_STATE = {
    items: [],
    movies: [],
    isLoading: false
}

const characters = (state = INITIAL_STATE, action) =>
    produce(state, draft => {
        switch (action.type) {
            case Types.GET_CHARACTER_REQUEST:
                draft.isLoading = true;
                break;
            case Types.GET_CHARACTER_SUCCESS:
                draft.isLoading = false;
                draft.items = action.payload.items;
                break;
            case Types.GET_MOVIE_REQUEST:
                draft.isLoading = true;
                break;
            case Types.GET_MOVIE_SUCCESS:
                draft.movies = null;
                draft.isLoading = false
                draft.movies = action.payload.movies;
                break;
            default:
                break;
        }
    });
export default characters;

