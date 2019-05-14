import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import ClientInput from './ClientInput';
import { Input, MenuItem, InputLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
    card: {
        minWidth: 275,
        textAlign: 'left',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        width: '200px'
    },
});

class Update extends Component {
    constructor() {
        super()
        this.state = {
            spacing: '16',
        }
    }

    handleInput = (event) => {
        this.props.handleInput(event)
    }

    handleSelection = (event) => {
        this.props.handleSelection(event)
    }

    updateClientOwner = () => {
        this.props.updateClientOwner(this.props.state.clientInput, this.props.state.ownerSelection)
    }

    updateEmailType =() => {
        this.props.updateEmailType(this.props.state.clientInput, this.props.state.emailTypeSelection)
    }

    declareSold = () => {
        this.props.declareSold(this.props.state.clientInput)
    }

    render() {
        const { classes } = this.props
        let ownersList = this.props.state.data.map(item => item.owner)
        ownersList = [...new Set(ownersList)]

        return (
            <Fragment>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Update
            </Typography>

                        <Typography component="h5">
                            Client:
                     <ClientInput clients={this.props.state.data} nameInput={this.props.state.nameInput} handleInput={this.handleInput} />
                        </Typography>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Transfer ownership to
                        <Select
                                value={this.props.state.ownerSelection}
                                name= "ownerSelection"
                                onChange={this.handleSelection}
                                className={classes.selectEmpty}
                                input={<Input id="select-multiple" />}
                            >
                                {ownersList.map(owner => (
                                    <MenuItem key={owner} value={owner}>{owner}</MenuItem>
                                ))}
                            </Select>

                            <Button color="secondary" className={classes.button} onClick={this.updateClientOwner} >
                                transfer
                            </Button>
                        </Typography>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Send Email:
                        <Select
                                value={this.props.state.emailTypeSelection}
                                name="emailTypeSelection"
                                onChange={this.handleSelection}
                                className={classes.selectEmpty}
                                input={<Input id="select-multiple" />}
                            >
                                   <MenuItem key='A' value='A'>A</MenuItem>
                                    <MenuItem key='B' value='B'>B</MenuItem>
                                    <MenuItem key='C' value='C'>C</MenuItem>
                                    <MenuItem key='D' value='D'>D</MenuItem>
                            </Select>

                            <Button color="secondary" className={classes.button} onClick={this.updateEmailType}>
                                send
                            </Button>
                        </Typography>

                        <Typography component="h5">
                            Declare sale!

                            <Button color="secondary" className={classes.button} onClick={this.declareSold}>
                                declare
                            </Button>
                        </Typography>

                    </CardContent>
                </Card>
            </Fragment>
        )
    }
}

// Inputs.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(styles)(Update);
