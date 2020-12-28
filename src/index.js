import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
//MODULES
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga() {
    // *-------------STEP 2-----------* 
    //FETCH_MOVIES triggers our fetchMovieSaga
    yield takeEvery('FETCH_MOVIES', fetchMovieSaga);
    // *------------STEP 10------------*
    // FETCH-DETAILS triggers our fetchDetailsSaga
    yield takeEvery('FETCH_DETAILS', fetchDetailsSaga);
    // *------------STEP 17-----------* 
    //ADD_MOVIE triggers the addMovieSaga
    yield takeEvery('ADD_MOVIE', addMovieSaga);
}
// *-----------STEP 18--------------*
//a post request: our new movie info (the local state from AddMovie Component) is our
//action.payload which will be the req.body of our post. Head over to movie.router.js
function* addMovieSaga(action) {
    console.log('in addMovieSaga');
    console.log('action.payload', action.payload);
    try {
        const movieData = yield axios.post(`/api/movie/`, action.payload);
    } catch (error) {
        console.log('error fetching', error);

    }
}
// *-----------STEP 11-----------*
//A get request is run on the servers with the title of the poster we clicked on 
//being the action.payload. Our movies.router.js will do the get so that we can
//get the details of our selected movie--including the GENRE!
function* fetchDetailsSaga(action) {
    console.log('in fetchDetailsSaga');
    try {
        const detailsData = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'SET_MOVIES', payload: detailsData.data })
    } catch (error) {
        console.log('error fetching', error);
    }
}
// *----------------STEP 3-------------- 
//our FETCH_MOVIES dispatch triggers our fetchmoviesaga here. 
//a get request is ran with movie.router.js
function* fetchMovieSaga() {
    console.log('in fetchMovieSaga');
    try {
        const movieData = yield axios.get('/api/movie');
        //STEP 5
        //Now that we have our movie data--along with movie posters--from the DB,
        //lets put it into the ReduxState. Our put triggers
        //the movieReducer
        yield put({ type: 'SET_MOVIES', payload: movieData.data })
    } catch (error) {
        console.log('error fetching', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// *---------------STEP 6---------------*
// Our movie info (posters) is saved to ReduxState
// *---------------STEP 13--------------*
//our movie genre is saved to redux state
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
