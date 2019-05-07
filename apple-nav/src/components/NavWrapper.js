import React from 'react';
import { Route, NavLink } from "react-router-dom";
import navData from "../navData";
import Nav from "./Nav";

class NavWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            data: navData,
        }
    }

    render() {
        return (
            <div className="navContent">
                <nav className="mainLinks">
                    {this.state.data.map(elem =>
                        <NavLink to={elem.link}>
                            <div className="mainLink">{elem.Name}</div>
                        </NavLink>
                        )}
                </nav> 
                
                {this.state.data.map(elem => 
                    <Route path={elem.link} render={props => <Nav {...props} nav={elem}/> }/>
                )}
            </div>

           



        )
    }
}

export default NavWrapper;