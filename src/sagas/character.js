import { takeEvery, fork, put, call } from 'redux-saga/effects';
import * as actions from '../actions/character';
import { baseURL } from '../config';

function* getCharacters() {
    try {
        let result;
        yield fetch(`${baseURL}/api/people/`)
            .then(response => response.json())
            .then(data => result = data)
        yield put(actions.getCharacterSuccess({
            items: result.results
        }));

    } catch (e) {
        console.log(e, 'Error:')
    }
}

function* getMovies(action) {
    try {
        const movies = action.payload[0];
        const movieNames = [];
        async function getMoviesData() {
            let films = await Promise.all(
                movies.films.map(async filmUrl => {
                    let filmResponse = await fetch(filmUrl)
                    return filmResponse.json()
                })
            )
            movieNames.push(films)
        }
        const res = yield call(getMoviesData);
        console.log(res);
        yield put(actions.getMovieSuccess({
            movies: movieNames[0]
        }))
    }
    catch (e) {
        console.log(e, 'Error:')
    }
}

function* watchGetCharacterRequest() {
    yield takeEvery(actions.Types.GET_CHARACTER_REQUEST, getCharacters);
    yield takeEvery(actions.Types.GET_MOVIE_REQUEST, getMovies);
}

const characterSaga = [
    fork(watchGetCharacterRequest)
]

export default characterSaga;