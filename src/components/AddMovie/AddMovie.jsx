import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class AddMovie extends Component {
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre: ''
        }
    }

    handleChange = (event, inputType) => {
        console.log('event happended')
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [inputType]: event.target.value,
            }
        }, function () {
            console.log(this.state);
        });
    }
    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    addMovie = (event) => {
        let field = this.state.newMovie;

        if (field.title === '' || field.poster === '' || field.description === '' || field.genre === '') {
            alert('Please fill out the input fields.')
        } else {
            event.preventDefault();
            this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie })
            this.setState({
                newMovie: {
                    title: '',
                    poster: '',
                    description: '',
                    Genre: ''
                }
            });
            console.log('adding Movie');
        }
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <div className="navbarAddMovie" id="cancelNav">
                    <Link to="/">CANCEL</Link>
                </div>
                <form onSubmit={this.addMovie}>
                    {/* <lable>Title:</lable> */}
                    <input type="text" placeholder="Title" value={this.state.newMovie.title} onChange={(event) => this.handleChange(event, 'title')} />
                    {/* <lable>Poster:</lable> */}
                    <input type='text' placeholder='Poster' value={this.state.newMovie.poster} onChange={(event) => this.handleChange(event, 'poster')} />
                    {/* <lable>Description:</lable> */}
                    <input type='text' placeholder='Description' value={this.state.newMovie.description} onChange={(event) => this.handleChange(event, 'description')} />
                    <br />
                    <label for="genre">Select a Genre:</label>
                    <select value={this.state.genre} onChange={(event) => this.handleChange(event, 'genre')}>
                        <option value="" selected disabled hidden>Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animated">Animated</option>
                        <option value="Biographical">Biographical</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Disaster">Disaster</option>
                        <option value="Drama">Drama</option>
                        <option value="Epic">Epic</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Musical">Musical</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Space-Opera">Space-Opera</option>
                        <option value="Superhero">Superhero</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(AddMovie);