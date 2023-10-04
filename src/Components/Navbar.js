import React from 'react'
import '../Css/Navbar.css'
import {FaSearch} from 'react-icons/fa'
import {BiNotification} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="container">
                <div className="left">
                <img
                    src="../images/netflix.jpg"
                    alt=""
                    />
                    <span>Series</span>
                    <span>Movies</span>
                    <span>new and popular</span>
                    <span>Watchlist</span>
                    <span><NavLink to="/register">register</NavLink></span>
                </div>
                <div className="right">
                    <FaSearch className="icon"/>
                    <span className="icon">ID</span>
                    <BiNotification className="icon"/>
                   
                    <details className="profile">
                        <summary> <img src="../images/profile.jpg" alt=""/></summary>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}