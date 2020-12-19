import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class Details extends Component {
    // componentDidMount() {
    //     // use component did mount to dispatch an action to request the movielist from the DB
    //     this.getMovies()
    // }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    render() {
        return (
            <div>
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
export default connect(putReduxStateOnProps)(Details);