import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import Badges from './Badges';
import Charts from './Charts';
const axios = require('axios')



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Analytics extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount = async () => {
    let clients = await axios.get('http://localhost:4000/clients')
    this.setState({ data: clients.data })
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div>
              <Badges />
          <Charts data={this.state.data} />
       </div>
    )
  }
}
    
export default withStyles(styles)(Analytics);
