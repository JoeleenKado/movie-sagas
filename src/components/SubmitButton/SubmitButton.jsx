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

class CommentsNextButton extends Component {
  render() {
    return (<Button onClick={this.props.addCommentsProp} variant="contained" color="primary">
      NEXT
    </Button>)
  }
};//END CommentsNextButton
export default withStyles(styles)(CommentsNextButton);