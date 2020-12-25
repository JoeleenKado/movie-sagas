import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovieSaga);
    yield takeEvery('FETCH_DETAILS', fetchDetailsSaga);
    yield takeEvery('ADD_MOVIE', addMovieSaga);
}

function* addMovieSaga(action){
    console.log('in addMovieSaga');
    console.log('action.payload', action.payload);
    try {
        const movieData = yield axios.post(`/api/movie/`, action.payload);
            // yield put({ type:'SET_MOVIES', payload: movieData.data})
      // fetchMovieSaga();
    } catch (error) {
        console.log('error fetching', error);

    }
}

function* fetchDetailsSaga(action) {
    console.log('in fetchDetailsSaga');
    try {
        const detailsData = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'SET_MOVIES', payload: detailsData.data })
    } catch (error) {
        console.log('error fetching', error);
    }
}

function* fetchMovieSaga() {
    console.log('in fetchMovieSaga');
    try {
        const movieData = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movieData.data })
    } catch (error) {
        console.log('error fetching', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// Used to store movies returned from the server
const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genreReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieReducer,
        genreReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
