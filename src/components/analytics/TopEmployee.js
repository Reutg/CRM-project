import React, { Component, PureComponent } from 'react'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    { owner: 'owner1', pv: 100, amt: 2400 },
    { owner: 'owner2', pv: 286, amt: 2210 },
    { owner: 'owner3', pv: 234, amt: 2290 },

];

class TopEmployee extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        const clientsData = this.props.clients
        const { clients } = this.props
        let soldClients = clients.filter(client => client.sold)
        let owners = {}


        for (let client of soldClients) {
            owners[client.owner] = owners[client.owner] ? owners[client.owner] + 1 : 1
        }

        let ownersSoldCount = Object.entries(owners).sort(function (a, b) {
            return a[1] - b[1];
        }).reverse().map(owner => ({ name: owner[0], count: owner[1] })).splice(0,3)

        console.log(ownersSoldCount);


        return (
            <BarChart layout="vertical" width={600} height={200} data={ownersSoldCount}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="category" dataKey="name" />
                <XAxis type="number"  />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="count" fill="#003F5C" />
            </BarChart>
        )
    }
}

export default TopEmployee

