import React, { Component } from 'react'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = { apiResponse: ""}
    }

    callAPI() {
        fetch('http://localhost:9000/')
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err)
    }

    componentDidMount() {
        this.callAPI()
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Hello wordl</h1>
                    
                </header>
            </div>
        )
    }
}