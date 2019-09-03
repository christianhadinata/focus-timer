import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ClockPicture from '../../assets/pictures/clock.png'
import LoginPicture from '../../assets/pictures/login.png'
import SignupPicture from '../../assets/pictures/signup.png'

class Navbar extends Component {
    constructor() {
        super();
    }

    IsUserLoggedin() {
        if (localStorage.jwtToken) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-override">
                <Link to="/" className="navbar-brand" id="navbar-brand-override">
                    FocusTime
                    <img className="img-fluid" id="img-override" src= { ClockPicture } alt="clock"></img>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {this.IsUserLoggedin() === true &&
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/Dashboard' className="nav-link">
                                    Dashboard
                                </Link>
                            </li>
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Stats</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Leaderboard</a>
                            </li> */}
                        </ul>
                    }
                    
                    {this.IsUserLoggedin() === false &&
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/Register' className="nav-link">
                                    <img src={SignupPicture} id="small-img-override"></img>
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Login" className="nav-link">
                                    <img src={LoginPicture} id="small-img-override"></img>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    }
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;