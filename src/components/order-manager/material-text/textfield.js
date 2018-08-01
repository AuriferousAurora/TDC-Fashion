import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '95%'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  underlineStyle: {
    borderColor: '#8acc41',
  }
});

class ComposedTextField extends React.Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl} fullWidth={true}>
          <InputLabel htmlFor="test-input">Reference P.O.</InputLabel>
          <Input id="test-input" onChange={this.handleChange} fullWidth={true}/>
        </FormControl>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);