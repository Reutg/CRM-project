import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import { TableRow, Dialog, TextField, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '50%',
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    
});


class Client extends Component {
    constructor(){
        super()
        this.state = {
            isDialogOpened: false,
            nameInput: null,
            surnameInput: null,
            countryInput: null  
        }
    }

    componentDidMount = () => {
        const {name , country} = this.props.client
        const fullName = name.split(' ')
        
        this.setState({nameInput: fullName[0] , surnameInput: fullName[1], countryInput: country })
    }

    formatDate = function (date) {
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
    }

    openUpdateClient = () => {
        this.setState({ isDialogOpened: true })
    }

    updateClient = () => {
        this.setState({ isDialogOpened: false })
        this.props.updateClient(this.props.client._id , this.state.nameInput, this.state.surnameInput, this.state.countryInput)
    }

    handleClose = () => {
        this.setState({ isDialogOpened: false })
    }

    handleInput = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name
    
        this.setState({ [inputName]: inputValue })
    }

    render() {
        const client = this.props.client
        const fullName = client.name.split(' ')
        const firstContact = client.firstContact
        let date = new Date(firstContact)
        const { classes } = this.props;

        return (
            <Fragment>
                <TableRow key={client.id} onClick={this.openUpdateClient} >
                    <TableCell>{fullName[0]}</TableCell>
                    <TableCell>{fullName[1]}</TableCell>
                    <TableCell>{client.country}</TableCell>
                    <TableCell>{this.formatDate(date)}</TableCell>
                    <TableCell>{client.emailType}</TableCell>
                    <TableCell>
                        {
                            client.sold ?
                                <IconButton aria-label="Check">
                                    <CheckIcon />
                                </IconButton> : null
                        }
                    </TableCell>
                    <TableCell>{client.owner}</TableCell>
                </TableRow>

                <div>
                <Dialog 
          open={this.state.isDialogOpened}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update client details </DialogTitle>
          <DialogContent>

            <TextField
              value={this.state.nameInput}
              name="nameInput"
              onChange={this.handleInput}
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
              className={classes.textField}
            />

            <TextField
              value={this.state.surnameInput}
              name="surnameInput"
              onChange={this.handleInput}
              margin="dense"
              id="surname"
              label="Surname"
              type="text"
              fullWidth
              className={classes.textField}
            />

            <TextField
              value={this.state.countryInput} 
              name="countryInput"
              onChange={this.handleInput}
              margin="dense"
              id="country"
              label="Country"
              type="text"
              fullWidth
              className={classes.textField}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.updateClient} size="large" variant="contained" color="primary" className={classes.button}>
              Update
            </Button>
            <Button onClick={this.handleClose} size="large" variant="contained" color="primary" className={classes.button}>
              Cancel
            </Button>
            
          </DialogActions>
        </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Client)