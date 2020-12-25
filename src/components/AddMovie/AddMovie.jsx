//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as /*Router,*/Route, Link } from 'react-router-dom';
//STYLING
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
//COMPONENTS
import SubmitButton from '../SubmitButton/SubmitButton.jsx'

//BUTTON THEME
const theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: red
    }
});

class AddMovie extends Component {
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre: ''
        }
    }
    //STEP 15
    //AS you fill the input fields, the values will be saved to localstate
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
    // *---------------STEP 16------------------*
    //click 'Add to Collection' to send a ADD_MOVIE dispatch which triggers root saga on index.js
    //This dispatch is the first step in rendering a GENRE to our Details Component   
    addMovie = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie })

        this.setState({
            newMovie: {
                title: '',
                poster: '',
                description: '',
                genre: ''
            }
        });
        console.log('adding Movie');
        console.log(this.state);
        alert("Your movie as been added to the collection.")
        this.props.history.push('/');

    }

    goHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="navbarAddMovie" id="cancelNav">
                    <Link to="/">CANCEL</Link>
                    {/* <button onClick={this.goHome}>CANCEL</button> */}
                </div>

                <h3>RS: {JSON.stringify(this.props.reduxState)}</h3>
                <form >
                    {/* onSubmit={this.addMovie} */}
                    <lable>Title:</lable>
                    <input type="text" value={this.state.newMovie.title}
                        onChange={(event) => this.handleChange(event, 'title')} />
                    <br />
                    <lable>Poster:</lable>
                    <input type='text' value={this.state.newMovie.poster}
                        onChange={(event) => this.handleChange(event, 'poster')} />
                    <br />
                    <lable>Description:</lable>
                    <input id="descriptionField" type='text' value={this.state.newMovie.description}
                        onChange={(event) => this.handleChange(event, 'description')} />
                    <br />
                    <label >Genre:</label>
                    {/* <label for="genre">Select a Genre:</label> */}
                    <select /*data-default=""*/ value={this.state.genre}
                        onChange={(event) => this.handleChange(event, 'genre')}>
                        {/* <select id="my_select" data-default=""></select> */}
                        {/* <option value="" selected disabled hidden>Genre</option> */}
                        <option value="" selected ></option>
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
                    <br />
                    <MuiThemeProvider theme={theme}>
                        <SubmitButton addMovieProp={this.addMovie} />
                    </MuiThemeProvider>
                </form>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(AddMovie);