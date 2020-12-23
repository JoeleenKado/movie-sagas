//***THIS BUTTON WILL TRANSPORT YOU FROM THE COMMENTS PAGE TO THE REVIEW PAGE
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
};//END CommentsNextButton
export default withStyles(styles)(SubmitButton);