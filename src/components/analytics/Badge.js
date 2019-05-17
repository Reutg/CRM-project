import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';


const styles = theme => ({
  root: {
    display: 'grid',
  },
  icon: {
    margin: theme.spacing.unit * 2,
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    lineHeight: '115px',

  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: "primary",
    },
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

});

class Badge extends Component {
  render() {
    const { classes } = this.props;
    const { badge } = this.props
    return (
      <div>
        <div className={classes.icon} style={{ backgroundColor: `${badge.color}`, color: 'white' }}>
          {badge.icon}
        </div>
        <Typography variant="h5" component="h3">
          {badge.data}
        </Typography>

        <Typography component="p">
          {badge.explanation}
        </Typography>
      </div>
    )
  }
}

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Badge);

