import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import TopEmployee from './TopEmployee';
import SalesByCountry from './SalesByCountry';

const styles = theme => ({
    root: {
      display: "flex",
      marginTop: "10px"
    },
   
  });
  
class Charts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopEmployee clients={this.props.data} />
          <SalesByCountry clients={this.props.data} />
      </div>
    )
  }
}

export default withStyles(styles)(Charts);
