import React, { Component } from "react"
import { render } from "react-dom"
import HomePage from "./HomePage"
import Workout from "./WorkoutPage"
import CreateWorkout from "./CreateWorkout"


export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <HomePage />
            <CreateWorkout />
            <Workout />
        </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)