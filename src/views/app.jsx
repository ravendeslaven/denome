import React from 'react'
import Layout from './layout.jsx'
import { RouteHandler } from 'react-router'



const App = React.createClass({
    render() {
        return(
            <Layout { ...this.props }>
                <main role="application" className="App" id="app">
                    {/* Esta es la parte más importante, acá react-router 
                    va a inicializarse y a cargar las vistas de cada ruta*/
                    }
                    <Router.RouteHandler { ...this.props} />
                </main>
            </Layout>
        )
    }
})

export default App