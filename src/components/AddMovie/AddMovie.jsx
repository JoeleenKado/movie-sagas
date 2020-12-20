import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class AddMovie extends Component {
    // componentDidMount() {
    //     // use component did mount to dispatch an action to request the movielist from the DB
    //     this.getMovies()
    // }

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
        // this.setState({
        //     ...this.state.newMovie,
        //         genre: ''
        // })
    } else {
        // this.props.dispatch({ type: 'ADD_FEELING', payload: this.state })
        // this.props.history.push('/Understanding');
        console.log('adding Movie');

    }

    // this.setState({
    //     newMovie: {
    //         ...this.state.newMovie,
    //         [inputType]: event.target.value,
    //     }
    // }, function () {
        console.log(this.state);
    // });


}

    render() {
        return (
            <div>
                              {/* <li><Link to="/">Back to List</Link></li> */}

                {/* <h3>This is the Movie List</h3> */}
                <pre>{JSON.stringify(this.props.reduxState.movieReducer.data)}</pre>
                
                <div className="navbarAddMovie" id="cancelNav">
                <Link to="/">CANCEL</Link>
  {/* <a href="#news">News</a> */}
  {/* <div className="dropdown">  */}
  {/* <button className="dropbtn" onClick="myFunction()">Dropdown
    <i className="fa fa-caret-down"></i>
  </button> */}
   {/* <div className="dropdown-content" id="myDropdown">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
</div>  */}
   {/* </div>   */}
</div> 


                <form onSubmit={this.addMovie}>
                {/* <li><Link to="/">CANCEL</Link></li> */}

                    {/* <lable>Title:</lable> */}
                    <input type="text" placeholder="Title" value={this.state.newMovie.title} onChange={(event)=>this.handleChange(event, 'title')} />
                    {/* <lable>Poster:</lable> */}
                    <input type='text' placeholder='Poster' value={this.state.newMovie.poster} onChange={(event)=>this.handleChange(event, 'poster')} />
                    {/* <lable>Description:</lable> */}
                   <input type='text' placeholder='Description' value={this.state.newMovie.description} onChange={(event)=>this.handleChange(event, 'description')} />
                   {/* <input type='text' placeholder='Description' value={this.state.newMovie.description} onChange={(event)=>this.handleChange(event, 'description')} /> */}

                    

                    {/* <form action="/action_page.php"> */}
                    <br/>
   <label for="genre">Select a Genre:</label> 
   <select value={this.state.genre} onChange={(event)=>this.handleChange(event, 'genre')}>
  {/* <select id="genre" name="genre"> */}
  {/* onSelect={(event)=>this.adventureOption(event)} */}
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
  <input type="submit"/>
{/* </form> */}


                    {/* <lable>order:</lable>
                    <input type='text' value={this.state.newPlant.order} onChange={this.handleNameChange, 'order'} />
                    <lable>family:</lable>
                    <input type='text' value={this.state.newPlant.family} onChange={this.handleNameChange, 'family'} />
                    <lable>subfamily:</lable>
                    <input type='text' value={this.state.newPlant.subfamily} onChange={this.handleNameChange, 'subfamily'} />
                    <lable>genus:</lable>
                    <input type='text' value={this.state.newPlant.genus} onChange={this.handleNameChange, 'genus'} />
                    <lable></lable>
                    <input type='submit' value='Add New Plant' /> */}
                </form>
                
                
                
                {/* <table className="center">
                <tbody>


                <tr><th>Movie Name</th></tr>
                    {this.props.reduxState.movieReducer.data.map(movie =>
                        <tr key={movie.id}><td>
                            {movie.title}</td>
                        </tr>)}
                        </tbody>
            </table> */}



            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(AddMovie);