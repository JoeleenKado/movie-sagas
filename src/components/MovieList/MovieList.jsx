import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class MovieList extends Component {
    // componentDidMount() {
    //     // use component did mount to dispatch an action to request the movielist from the DB
    //     this.getMovies()
    // }

    getIt = (event) => {
        console.log('event happended')
        this.getMovies()
    }

    getDetails = (event, {movie}) => {
        console.log('Gettin Details for :', movie.poster)
        this.props.dispatch({ type: 'FETCH_DETAILS' });
    // this.getMovies()
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
}
render() {
        return (
            <div>
                <div className="navbarMovieList">
                    <button onClick={this.getIt}>GetIt</button>
                    {/* <li><Link to="/Details">Details</Link></li>
<br/> */}
                    <Link to="/AddMovie">AddMovie</Link>
                        </div>
                {/* <Route exact path="/Details" component={Details} /> */}
                <li><Link to="/Details">Details</Link></li>
                {/* <li><Link to="/AddMovie">AddMovie</Link></li> */}
                <h1>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</h1>
                <h3>This is the Movie Poster List</h3>

                        {this.props.reduxState.movieReducer.map((movie) => {
                            return(
                                <section  className="posterList" key={movie.id}> <Link to="/Details"><img value={movie} onClick={(event)=>this.getDetails(event, {movie})} src={movie.poster} alt=""/></Link> </section>
                              )
                     })}
                    <button onClick={(event)=>this.getRandomGif(event)}>NEW GIF</button>
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);