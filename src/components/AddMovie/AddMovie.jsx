import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

class AddMovie extends Component {
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
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
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                                        </select>
                     {/* <MuiThemeProvider theme={theme}> */}
                     <input type="submit" />

                     {/* <CommentsNextButton addCommentsProp={this.addComments} /> */}
                    {/* </MuiThemeProvider>  */}


                </form>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(AddMovie);