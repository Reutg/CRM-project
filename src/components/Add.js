import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


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

class Add extends Component {

    constructor(){
        super()
        this.state = {
            firstName: "",
            surname: "",
            country: "",
            Owner: ""
        }
    }

    handleInput = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name
    
        this.setState({ [inputName]: inputValue })
    }

    addClient = () => {
        let newClient = this.state
        this.props.addClient(newClient.firstName, newClient.surname, newClient.owner, newClient.country)
    }

    render() {
        const { classes } = this.props

        return (
            <Fragment>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        Add client
                        </Typography>

                        <Typography component="h5">
                        First name:
                        <Input
                    name="firstName"
                    onChange={this.handleInput}
                    value={this.state.firstName}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                        </Typography>

                        <Typography component="h5">
                        Surname:
                        <Input
                    name="surname"
                    onChange={this.handleInput}
                    value={this.state.surname}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                        </Typography>

                        <Typography component="h5">
                        Country:
                        <Input
                    name="country"
                    onChange={this.handleInput}
                    value={this.state.country}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                        </Typography>

                        <Typography component="h5">
                        Owner:
                        <Input
                    name="owner"
                    onChange={this.handleInput}
                    value={this.state.owner}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                        </Typography>

                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.addClient}>
                     Add new client
                     </Button>
     
                    </CardContent>
                </Card>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Add);