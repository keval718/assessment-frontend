export const Types = {
    GET_CHARACTER_REQUEST: 'character/get_character_request',
    GET_CHARACTER_SUCCESS: 'character/get_character_success',
    GET_MOVIE_REQUEST: 'movie/get_movie_request',
    GET_MOVIE_SUCCESS: 'character/get_movie_success',
}

export const getCharacterRequest = () => ({
    type: Types.GET_CHARACTER_REQUEST
})
export const getCharacterSuccess = ({ items }) => ({
    type: Types.GET_CHARACTER_SUCCESS,
    payload: {
        items
    }
});
export const getMovieRequest = (data) => ({
    type: Types.GET_MOVIE_REQUEST,
    payload: data
})
export const getMovieSuccess = ({ movies }) => ({
    type: Types.GET_MOVIE_SUCCESS,
    payload: {
        movies
    }
});