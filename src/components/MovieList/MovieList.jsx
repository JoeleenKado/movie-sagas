import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class MovieList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the movielist from the DB
        this.getMovies()
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
<div>
<div className="navbarMovieList">
{/* <li><Link to="/Details">Details</Link></li>
<br/> */}
<li id="addMovieNav"><Link to="/AddMovie">AddMovie</Link></li>
{/* <li id="addMovieNav"><Link to="/AddMovie">AddMovie</Link></li> */}

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

{/* <Route exact path="/Details" component={Details} /> */}
<li><Link to="/Details">Details</Link></li>
{/* <li><Link to="/AddMovie">AddMovie</Link></li> */}


                <h3>This is the Movie List</h3>
                <pre>{JSON.stringify(this.props.reduxState.movieReducer.data)}</pre>
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
export default connect(putReduxStateOnProps)(MovieList);