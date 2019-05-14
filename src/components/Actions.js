import React, { Component } from 'react'
import Update from './Update';
import Add from './Add';
import { async } from 'q';


const axios = require('axios')

class Actions extends Component {
    constructor() {
        super()
        this.state = {
         data: [],
         clientInput: "",
         ownerSelection: "",
         emailTypeSelection: ""
        }
    }

    componentDidMount = async () => {
        let clients = await axios.get('http://localhost:4000/actions')
       
        this.setState({ data: clients.data }, () => {
        })
    }   

    updateClientOwner = async (clientName, owner) => {
        let updatedClient = await axios.put(`http://localhost:4000/actions/${clientName}`, {owner})

        let clients = [...this.state.data]
        const clientIndex = clients.findIndex(client => client.name === clientName)
        clients[clientIndex] = updatedClient.data
        
        this.setState({data: clients})
    }

    updateEmailType = async (clientName, emailType) => {
        let updatedClient = await axios.put(`http://localhost:4000/actions/${clientName}`, {emailType})

        let clients = [...this.state.data]
        const clientIndex = clients.findIndex(client => client.name === clientName)
        clients[clientIndex] = updatedClient.data
        
        this.setState({data: clients})
    }

    declareSold = async (clientName) => {
        let updatedClient = await axios.put(`http://localhost:4000/actions/${clientName}`, {sold: true})

        let clients = [...this.state.data]
        const clientIndex = clients.findIndex(client => client.name === clientName)
        clients[clientIndex] = updatedClient.data
        
        this.setState({data: clients})
    }

    addClient = async (name, surname, owner, country) => {
        debugger
        let client = {name, surname, owner, country}
        let newClient = await axios.post('http://localhost:4000/clients', client)

        let clients = [...this.state.data]
        clients.push(newClient)

        this.setState({data: clients})
    }

    handleSelection = (event) => {
        let selectValue = event.target.value
        let selectName = event.target.name
        this.setState({ [selectName] : selectValue })
      }

    handleInput = (event) => {
        let inputValue = event.target.value
        let inputName = event.target.name
    
        this.setState({ [inputName]: inputValue })
    }  

    render() {
        return (
            <div>
                <Update 
                    state={this.state} 
                    handleSelection={this.handleSelection} 
                    handleInput={this.handleInput} 
                    updateClientOwner={this.updateClientOwner} 
                    updateEmailType={this.updateEmailType} 
                    declareSold={this.declareSold} />
                <Add addClient={this.addClient} />
            </div>
        )
    }
}

export default Actions