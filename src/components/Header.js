import React  from 'react';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import NavBar from '../components/Navbar';

import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function Header() {
    return (




        <Router>
            
            <NavBar/>

            <Switch>
                <Route exact path="/"> <Redirect to="/about" /> </Route>
                <Route path="/About"> <About /> </Route>
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} /> 
                <Route path="/Resume"> <Resume /> </Route>
            </Switch>
        </Router>

        )
    }   





export default Header;