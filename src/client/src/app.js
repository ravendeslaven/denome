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
import './css/responsiveMenu.css'
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
            <header className="mainHeader">
                <div className="logo"></div>
                <span className="navMenu bt-menu" aria-label="Open Menu"></span>
                <nav id="nav_bar">
                    <div className="menuContent">
                        <a hreft="#" className="moon"></a>
                        <ul>
                            <li>
                                <a href="/proyects" className="text_proyects links">Proyects</a>
                            </li>
                            <li>
                                <a href="/groups" className="text_groups links">Groups</a>
                            </li>
                            <li>
                                <a href="/events" className="text_events links">Events</a>
                            </li>

                            <a href="/signin" className="signin ">
                                <h1>Sign In</h1>
                            </a>
                            <a href="/signup" className="signup">
                                <h1>Sign Up</h1>
                            </a>
                            <span className="spain"></span>
                            <span className="unitedking"></span>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="mainSection">
                <div className="mainText">
                    <h1>Denome World</h1>
                    <p>Take your experience in the world of cryptocurrencies to another level</p>
                </div>
                <div className="mainButtons">
                    <a href="#about" className="buttonPurple links">
                        <h1>About</h1>
                    </a>
                    <a href="#partners" className="buttonBlue links">
                        <h1>Partners</h1>
                    </a>
                </div>
            </section>

            <section id="about" className="aboutSection">
                <div className="itemGroups">
                    <div className="logoGroups"></div>
                    <h1>Groups</h1>
                    <p>Specialized groups classified according to your needs.
                    You will find projects in which you will get everything you need to
                    stay up-to-date with market trends and behavior</p>
                </div>
                <div className="itemProyects">
                    <div className="logoProyects"></div>
                    <h1>Proyects</h1>
                    <p>Find information of your interest related to the project you want,
                    score, reliability and comments could serve as a reference at the moment
                    make a decision</p>
                </div>
                <div className="itemCalendars">
                    <div className="logoCalendar"></div>
                    <h1>Calendars</h1>
                    <p>Create a calendar to keep track of important events in a project, a group
                    or your own</p>
                </div>
                <div className="itemJournals">
                    <div className="logoJournals"></div>
                    <h1>Journals</h1>
                    <p>Create journals to keep records of investigations or information about your
                    interest, add them to a group, a project.</p>
                </div>

                <div className="barra">
                </div>
                <a href="#about" className="sello"></a>
            </section>

            <div className="geometry"></div>


            <section id="partners" className="partnerSection">
                <h1>Who are partners?</h1>
                <p className="p1">
                    A partner is one who decides to actively donate to the Denome World project, thus contributing to the maintenance and continuous improvement of the app that is by and for the community
                </p>
                <p className="p2">
                    Being a member brings certain benefits, among which are: privacy when saving content such as blogs, calendars, projects. Tools that provide approximate data for investment decision making...
                </p>
                <a href="/" className="links">
                    <p className="readMore">Read more</p>
                    <div className="left"></div>
                </a>
                <a href="/" className="castle"></a> <a className="stadistics"></a>
            </section>
            <footer className="mainFoot">
                <div className="logoContent">
                    <div className="whiteLogo"></div>
                    <p>D  e  n  o  m  e  W  o  r  l  d</p>

                </div>
                <div className="firstText">
                    <h1 className="text1">Terms of service</h1>
                    <h1 className="text2">Privacy Policy</h1>
                    <h1 className="text3">Facebook</h1>
                    <h1 className="text4">Reddit</h1>
                </div>
                <div className="secondText">
                    <h1 className="text5">Forum</h1>
                    <h1 className="text6">Dow</h1>
                    <h1 className="text7">Community</h1>
                </div>
                <p className="copyR">© 2021 Denome World. All Rights Reserved.</p>
            </footer>
        </Fragment>
    )
}





function Proyects() {
    return (
        <Fragment>
            <div className="proyectSection">
                <div className="contentProyect">
                    <h1>Most popular proyects</h1>
                    <p>Description</p>

                    <div className="popular1">
                        <div className="imagen"></div>
                        <div className="dropmenu"></div>
                        <h1>Proyect name</h1>
                        <p>Descriptionasdadasdkadamdladlkklmslkmsklfmfsmfklsmflsfmsklfsllam</p>
                        <div className="barraRanking"></div>
                        <div className="GroupLogo"></div>
                    </div>

                    <div className="popular2">
                        <div className="imagen"></div>
                        <div className="dropmenu"></div>
                        <h1>Proyect name</h1>
                        <p>Descriptionasdadasdkadamdladlkklmslkmsklfmfsmfklsmflsfmsklfsllam</p>
                        <div className="barraRanking"></div>
                        <div className="GroupLogo"></div>
                    </div>

                    <div className="popular3">
                        <div className="imagen"></div>
                        <div className="dropmenu"></div>
                        <h1>Proyect name</h1>
                        <p>Descriptionasdadasdkadamdladlkklmslkmsklfmfsmfklsmflsfmsklfsllam</p>
                        <div className="barraRanking"></div>
                        <div className="GroupLogo"></div>
                    </div>

                    <div className="popular4">
                        <div className="imagen"></div>
                        <div className="dropmenu"></div>
                        <h1 className="nameProyect">Proyect name</h1>
                        <p className="proyectDescription">>Descriptionasdadasdkadamdladlkklmslkmsklfmfsmfklsmflsfmsklfsllam</p>
                        <div className="barraRanking"></div>
                        <div className="GroupLogo"></div>
                    </div>
                </div>
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





/*

Version pantalla grande
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





*/