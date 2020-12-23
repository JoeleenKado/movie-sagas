import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as route, Link } from 'react-router-dom';

class Details extends Component {
    state = {
        title: ''
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        }, function () {
            console.log(this.state);
        })
    }

    sendSearch() {
        // this.props.dispatch({ type: 'POST_SEARCH', payload: this.state.gifSearch });
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.state.title });
    }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
            <div>
                <div className="navbarAddMovie" id="cancelNav">
                    <Link to="/">Back to Gallery</Link>
                    {/* <li><Link to="/">Back to List</Link></li> */}
                </div>
                <h2>Details</h2>
                {/* <pre>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</pre> */}
                {this.props.reduxState.movieReducer.map((movie) => {
                    return (
                        <section className="posterList" key={movie.id}>{movie.title}
                            <br />
                           Genre: {movie.name}
                            <br/>
                            {movie.description}</section>
                    )
                })}
            </div>
        );
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);