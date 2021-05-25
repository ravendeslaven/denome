import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";


import { Proyect } from './components/proyects/Proyects'
import './css/styles.css'
//import { Calendar} from './components/calendars/Calendar'

/*
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { apiResponse: "" }
    }

    callAPI() { // Obtendra los datos de la API express y almacenara su respuesta en this.state.apiResponse
        const API_URL = 'http://localhost:9000'
        fetch(`${API_URL}/blogs`)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err)
    }

    componentDidMount() { // Metodo de ciclo de vida despues de que se monte el componente
        this.callAPI()
    }

    renderProyects() {
        alert('Proyects')
    }

    render() {
        return (
            <Fragment>
                <Router>
                    <nav className="mainNav">
                        <div className="proyects">
                            <Link to='/proyects' className="linkProyect linkTab">
                                <h1>Proyects</h1>
                            </Link>
                        </div>
                        <div className="groups">
                            <Link to="/groups" className="linkGroups linkTab">
                                <h1>Groups</h1>
                            </Link>
                        </div>
                        <div className="news">
                            <Link to="/news" className="linkNews linkTab">
                                <h1>News</h1>
                            </Link>
                        </div>
                        <hr />
                        <hr />

                        <Switch>
                            <Route path="/proyects" children={<Proyects />} />
                            <Route path="/groups" children={<Groups />} />
                            <Route path="/news" children={<News />} />
                        </Switch>

                    </nav>
                </Router>
            </Fragment >

        )
    }
}

export default App

*/


export default function App() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    )
}

function ModalSwitch() {
    let location = useLocation()
    let background = location.state && location.state.background

    return (
        <Switch location={background || location}>
            <Route exact path="/" children={<Home />} />
            <Route path="/proyects" children={<Proyects />} />
            <Route path="/groups" children={<Groups />} />
            <Route path="/news" children={<News />} />
        </Switch>
    )
}





function Home() {
    return (
        <Fragment>
            <div id="homeSection" className="homeSection">
                <Link to="/"><div className="logoDenome"></div></Link>
                <div className="buttonSignIn">
                    <a href="#signin" className="textButton linkTab linkAboutButton">Sign In</a>
                </div>
                <nav className="mainNav">
                    <div className="proyects">
                        <Link to="/proyects" className="linkProyect linkTab">
                            <h1>Proyects</h1>
                        </Link>
                    </div>
                    <div className="groups">
                        <Link to="/groups" className="linkGroups linkTab">
                            <h1>Groups</h1>
                        </Link>
                    </div>
                    <div className="news">
                        <Link to="/news" className="linkNews linkTab">
                            <h1>News</h1>
                        </Link>
                    </div>
                </nav>
                <header className="denomeHead">
                    <div className="textContent">
                        <h1>Denome World</h1>
                        <p>Take your experience in the world of cryptocurrencies to another level</p>
                    </div>
                    <hr />
                    <div className="buttonContent">
                        <div className="aboutButton">
                            <a href="#about" className=" textButton linkTab linkAboutButton">About</a>
                        </div>
                        <div className="partnerButton">
                            <a href="#partners" className="textPartner linkTab" >Partners</a>
                        </div>
                    </div>
                </header>
                <div className="images"></div>
                <div className="phone"></div>
            </div>

            <div id="about" className="aboutSection">
                <a href="#homeSection"><div className="arrowUp"></div></a>
                <div className="contentAbout">

                    <div id="aboutGroup" className="aboutGroups">

                        <a href="#aboutGroup" ><div className="icoGroup"></div></a>
                        <h1>Groups</h1>
                        <p>Specialized groups classified according to your needs.
                        You will find projects in which you will get everything you need to
                        stay up-to-date with market trends and behavior</p>

                    </div>

                    <div id="aboutProyect" className="aboutProyects">
                        
                        <a href="#aboutProyect"><div className="icoProyect"></div></a>
                        <h1>Proyects</h1>
                        
                        <p> Find information of your interest related to the project you want,
                        score, reliability and comments could serve as a reference at the moment
                        make a decision</p>

                    </div>
                    <div id="aboutCalendar" className="aboutCalendars">

                        <a href="#aboutCalendar"><div className="icoCalendar"></div></a>
                        <h1>Calendars</h1>
                        <p>Create a calendar to keep track of important events in a project, a group
                        or your own</p>

                    </div>
                    <div id="aboutBlog" className="aboutBlog">

                        <a href="#aboutBlog"><div className="icoBlog"></div></a>
                        <h1>Proyect Blog</h1>
                        <p>Create journals to keep records of investigations or information about your
                        interest, add them to a group, a project.</p>
                    </div>
                </div>
            </div>

            <div id="partners" className="partnerSection">
                <a href="#about"><div className="arrowUp"></div></a>
                <div className="partnerHeader">
                    <h1>Who are partners?</h1>
                    <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor</p>
                </div>

            </div>


        </Fragment>
    )
}





function Proyects() {
    return (
        <Fragment>
            <div className="mainContainer">
                <Proyect name="Proyect1" date="Today" />
            </div>
        </Fragment>
    )
}

function Groups() {
    return (
        <h1>Groups</h1>

    )
}


function News() {
    return (
        <h1>News</h1>
    )
}












/*

  <Fragment>
                <nav className="mainNav">
                    <div className="proyects">
                        <a href={<Proyect />}><h1>Proyects</h1></a>
                    </div>
                    <div className="groups">
                        <h1>Groups</h1>
                    </div>
                    <div className="news">
                        <h1>News</h1>
                    </div>
                </nav>
            </Fragment>


 flex: none;
 order: 0;
 align-self: stretch;
 flex-grow: 0;
 margin: 30px 0px;





 flex: none;
 order: 1;
 align-self: stretch;
 flex-grow: 0;
 margin: 20px 0px;




    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 20px 0px;

*/