import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';


const styles = {
    root: {
        flexGrow: 1,
    },
    
};

class NavBar extends Component {

    render() {
        const { classes } = this.props;
        return (
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Link to="/clients" style={{ textDecoration: 'none', color: 'white', margin: '5px'}}>Clients</Link>
                        <Link to="/actions" style={{ textDecoration: 'none', color: 'white', margin: '5px'}}>Actions</Link>
                        <Link to="/analytics" style={{ textDecoration: 'none', color: 'white', margin: '5px'}}>Analytics</Link>
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>

        )
    }
}

export default withStyles(styles)(NavBar);