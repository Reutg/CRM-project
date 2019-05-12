import React, { Component, Fragment } from 'react'

import TableCell from '@material-ui/core/TableCell';
import { TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';



export default class Client extends Component {
    formatDate = function(date){
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    render() {
        const client = this.props.client
        const fullName = client.name.split(' ')
        const firstContact =  client.firstContact
        let date = new Date(firstContact)
        
        return (
            <Fragment>
                <TableRow key={client.id}>
                    <TableCell>{fullName[0]}</TableCell>
                    <TableCell>{fullName[1]}</TableCell>
                    <TableCell>{client.country}</TableCell>
                    <TableCell>{this.formatDate(date)}</TableCell>
                    <TableCell>{client.email}</TableCell>
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

            </Fragment>
        )
    }
}
