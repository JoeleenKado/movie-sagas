import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';

class MovieList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the movielist from the DB
        this.getMovies()
       // this.props.dispatch({ type: 'FETCH_MOVIES' });
 }
 
 getDetails = (event, { movie }) => {
        console.log('Gettin Details for :', movie.title)
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: movie.title });
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    render() {
        return (
            <div>
                <div className="navbarMovieList">
                    <Link to='/AddMovie'>AddMovie</Link>
                </div>
                {/* <li><Link to="/Details">Details</Link></li> */}
                {/* <h3>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</h3> */}
                {this.props.reduxState.movieReducer.map((movie) => {
                    return (
                        <section className="posterList" key={movie.id}> 
                            <Link to="/Details"><img onClick={(event) => this.getDetails(event, { movie })} 
                                src={movie.poster} alt="" />
                                </Link> 
                        </section>
                    )
                })}
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);