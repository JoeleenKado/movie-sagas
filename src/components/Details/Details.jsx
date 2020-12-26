//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as route, Link } from 'react-router-dom';
//STYLING
import Typography from '@material-ui/core/Typography';

class Details extends Component {
    render() {
        return (
            <div>
                <div className="navbarAddMovie" id="cancelNav">
                    <Link to="/">Back to Gallery</Link>
                    {/* <li><Link to="/">Back to List</Link></li> */}
                </div>
                {/* *-----------------STEP 14--------------*
                Here we will see details of our movie poster that we clicked on from the MovieList */}
                <Typography variant="h4" gutterBottom>
                    <h2>Details</h2>
                </Typography>
                {/* <pre>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</pre> */}
                {this.props.reduxState.movieReducer.map((movie) => {
                    return (
                        <section className="posterList" key={movie.id}>{movie.title}
                            <br />
                           Genre: {movie.name}
                            <br />
                            {movie.description}</section>
                    )
                })}
            </div>
        );
    }
};//END DETAILS
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Details);