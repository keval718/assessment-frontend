import characterSaga from './character';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...characterSaga
    ])
}