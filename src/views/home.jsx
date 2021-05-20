import React from 'react'
import { Link } from 'react-router'

const Home = React.createClass({
    render() {
        return(
            <h1>{ this.props.title}</h1>,
            {/* Este link es para que react-router funciona como una SPA*/},
            <Link to="home">Home</Link>
        )
    }
})

export default Home