import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Workout</Link>
                    <Link to="/workouts">Workouts</Link>
                </ul>
            </div>
        )
    }
}