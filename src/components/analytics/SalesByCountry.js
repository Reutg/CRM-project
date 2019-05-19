import React, { Component, PureComponent } from 'react'

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';


class SalesByCountry extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    

    render() {
        const { clients } = this.props

        let salesPerCountry = []

        let countriesCount = {}

        for (let client of clients) {
            countriesCount[client.country] = countriesCount[client.country] ? countriesCount[client.country] + 1 : 1
        }

        Object.entries(countriesCount).forEach(([key, value]) => {salesPerCountry.push({country: key , count: value})})

        console.log(salesPerCountry)

        return (
            <BarChart
                width={600}
                height={300}
                data={salesPerCountry}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="country" />
                <YAxis type="number" />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart >

        )
    }
}

export default SalesByCountry

