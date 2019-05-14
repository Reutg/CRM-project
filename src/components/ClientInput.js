import React, { Component, Fragment } from 'react'
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';


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
    },
});


class ClientInput extends Component {
    
    handleInput = (event) => {
        this.props.handleInput(event)
    }
    
    render() {
        const suggestions = this.props.clients.map(client => client.name)
        const { classes } = this.props
        return (
            <Fragment>
                <Input
                    placeholder="Client Name"
                    name="clientInput"
                    onChange={this.handleInput}
                    value={this.props.nameInput}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </Fragment>
        )
    }
}

export default withStyles(styles)(ClientInput);
