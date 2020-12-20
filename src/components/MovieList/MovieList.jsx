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

{/* <Route exact path="/Details" component={Details} /> */}
<li><Link to="/Details">Details</Link></li>
<li><Link to="/AddMovie">AddMovie</Link></li>


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