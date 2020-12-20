import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as route, Link} from 'react-router-dom';



// const mapStateToProps = reduxState => ({
//     reduxState,
// });

class Details extends Component {
    // componentDidMount() {
    //     // use component did mount to dispatch an action to request the movielist from the DB
    //     this.getMovies()
    // }

    state = {
        title: ''
      }

      handleChange = (event) => {
        this.setState({
          title: event.target.value
        }, function() {
            console.log(this.state);
        })
      }

      sendSearch() {
        // this.props.dispatch({ type: 'POST_SEARCH', payload: this.state.gifSearch });
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.state.title });
      }

    getMovies() {
        this.props.dispatch({ type: 'FETCH_MOVIES'});
    }

    render() {
        return (
            <div>
                              <li><Link to="/">Back to List</Link></li>

                <h3>This is the Details Page</h3>
                <pre>RS.movieReducer: {JSON.stringify(this.props.reduxState.movieReducer)}</pre>
                {/* <button onClick={(event) => this.sendSearch(event)}>SEARCH</button> */}

                {/* <input onChange={this.handleChange} type='text' placeholder='Search for a title!' /> */}

                {this.props.reduxState.movieReducer.map((movie) => {
                            return(
                                <section  className="posterList" key={movie.id}>{movie.title} 
                                <br/>
                                {movie.description}</section>
                          
                                )
                                
                        })}
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