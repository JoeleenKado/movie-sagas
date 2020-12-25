//*****THIS COMPONENT IS A BUTTON WHICH IS RENDERED TO MY ADDMOVIES COMPONENT****
//MODULES
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    }
});

class SubmitButton extends Component {
    render() {
        return (<Button onClick={this.props.addMovieProp} variant="contained" color="primary">
            ADD TO COLLECTION
        </Button>)
    }
};//END SubmitButton
export default withStyles(styles)(SubmitButton);