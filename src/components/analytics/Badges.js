import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import { Face, Mail, Flag, HowToReg } from '@material-ui/icons';

import Badge from './Badge';
const axios = require('axios')

const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    display: "flex"
  },
  paper: {
    height: 140,
    width: 100,
  },
});

class Badges extends Component {
  constructor() {
    super()
    this.state = {
      badges: [
        { name: "newClients", icon: <Face />, data: "", explanation: "", color: "#339933" },
        { name: "emailsSent", icon: <Mail />, data: "", explanation: "Emails sent", color: "#00ace6" },
        { name: "outstandingClients", icon: <HowToReg />, data: "", explanation: "Outstanding clients", color: "#ff1a1a" },
        { name: "hottestCountry", icon: <Flag />, data: "", explanation: "Hottest country", color: "#ffcc00" },
      ],
      data: []
    }
  }

  componentDidMount = async () => {
    let clients = await axios.get('http://localhost:4000/clients')
    this.setState({ data: clients.data }, () => {
      this.updateNewClientsExplanation()
      this.getNewClientsAmount()
      this.getEmailsamount()
      this.getOutstandingClients()
      this.getHottestCountry()
    })
  }

  updateNewClientsExplanation = () => {
    const badges = [...this.state.badges]
    const newClientBadge = badges[0]
    const date = new Date()
    const month = date.toLocaleString('en-us', { month: 'long' });
    newClientBadge.explanation = `New ${month} clients`

    this.setState({ badges })
  }

  getNewClientsAmount = () => {
    let clients = [...this.state.data]
    const badges = [...this.state.badges]

    let date = new Date()
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    let newClients = 0
    for (let c of clients) {
      if (new Date(c.firstContact) > firstDayOfMonth) {
        newClients++
      }
    }
    badges[0].data = newClients
    this.setState({ badges })
  }

  getEmailsamount = () => {
    let clients = [...this.state.data]
    const badges = [...this.state.badges]

    let emailsAmount = clients.filter(client => client.emailType != null).length
    badges[1].data = emailsAmount

    this.setState({ badges })
  }

  getOutstandingClients = () => {
    let clients = [...this.state.data]
    let badges = [...this.state.badges]

    let outstandingClients = clients.filter(client => !client.sold).length
    badges[2].data = outstandingClients

    this.setState({ badges })
  }

  getHottestCountry = () => {
    let clients = [...this.state.data]
    let badges = [...this.state.badges]

    let countriesCount = {}

    for (let client of clients) {
      countriesCount[client.country] = countriesCount[client.country] ? countriesCount[client.country] + 1 : 1
    }

    let countries = Object.keys(countriesCount);
    let currentCountry
    let hottest
    let max = 1
    for (let i=0 ; i<countries.length ; i++){
      currentCountry = countries[i]
      if (countriesCount[currentCountry] > max){
        max = countriesCount[currentCountry]
        hottest = currentCountry
      } 
    }

    badges[3].data = hottest

    this.setState({badges})
  }

  render() {

    const { classes } = this.props;
    console.log(this.state.data[0])
    console.log(this.state.badges)
    return (
      <div className={classes.root} >
        {this.state.badges.map(badge =>
          <Badge key={badge.name} badge={badge} />
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Badges);
