import React, { Component, PureComponent, Fragment } from 'react'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Typography } from '@material-ui/core';

class TopEmployee extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        const { clients } = this.props
        let soldClients = clients.filter(client => client.sold)
        let owners = {}


        for (let client of soldClients) {
            owners[client.owner] = owners[client.owner] ? owners[client.owner] + 1 : 1
        }

        let ownersSoldCount = Object.entries(owners).sort(function (a, b) {
            return a[1] - b[1];
        }).reverse().map(owner => ({ name: owner[0], count: owner[1] })).splice(0, 3)

        return (
            <div>
                <Typography variant="h6" component="h3" color="secondary" align="left">
                    Top employees
                </Typography>

                <BarChart layout="vertical" width={700} height={200} data={ownersSoldCount}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis type="category" dataKey="name" />
                    <XAxis type="number" />
                    <Bar dataKey="count" fill="#003F5C" />
                </BarChart>
            </div>
        )
    }
}

export default TopEmployee

