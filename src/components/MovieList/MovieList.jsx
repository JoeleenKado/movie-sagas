//MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';
//STYLING
import Typography from '@material-ui/core/Typography';

// const theme = createMuiTheme({
//     typography: {
//       fontFamily: [
//         'cursive',
//         'Chilanka',
//       ].join(','),
//     },
//   });

class MovieList extends Component {
    // *---------STEP 1-------------* 
    //on mount we will run our function which sends a dispatch to our index 
    //to do a get request so that we get our movie poster gallery
    componentDidMount() {
        this.getMovies()
    }
    // *-------------Step 9------------*
    //FETCH_DETAILS dispatch triggers the rootSata in index.js
    getDetails = (event, { movie }) => {
        console.log('Gettin Details for :', movie.title)
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: movie.title });
    }
    //sends a dispatch to our root saga
    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }
    //here we will render our movie posters to the dom 
    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    <h2 id="MovieListHeading">Joeleen's Movie Gallery</h2>
                </Typography>

                <div className="navbarMovieList">
                    {/* *------------STEP 15-----------*
                    Click this link to be transported to the AddMovie Component  */}
                    <Link to='/AddMovie'>AddMovie</Link>
                </div>
                {/* <li><Link to="/Details">Details</Link></li> */}
                {/* <h3>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</h3> */}
                {/* *----------STEP 7----------*
            here we will render our movie posters to the dom  */}
                {this.props.reduxState.movieReducer.map((movie) => {
                    return (
                        <section className="posterList" key={movie.id}>
                            <Link to="/Details">
                                {/* *-------------STEP 8--------------*
                              click on a poster to run getDetails */}
                                <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" />
                            </Link>
                        </section>
                    )
                })}
            </div>
        );
    }
};//END MOVIELIST
const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(MovieList);