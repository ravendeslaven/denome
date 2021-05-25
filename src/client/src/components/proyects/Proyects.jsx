import React, { Component, Fragment } from 'react'

export class Proyect extends Component {
    constructor(props) {
        super(props)
        this.state = { proyect: {}}
    }

    getAPIProyects() {
        const API_URL = 'http://localhost:9000'
        fetch(`${API_URL}/proyects`)
            .then((res) => res.json())
            .then((proyects) => {
                this.setState({ proyect: proyects})
            })
    }

    componentDidMount() {
        this.getAPIProyects()
    }


    render() {
        return(
            <div>
                <h3>{this.props.date}</h3>
            </div>
        )
    }
}
