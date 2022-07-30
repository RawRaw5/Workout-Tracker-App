import React, { Component } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link, Redirect} from "react-router-dom"
import HomePage from "./HomePage"
import Workout from "./WorkoutPage"
import CreateWorkout from "./CreateWorkout"


export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/workouts' element={<Workout />}/>
                    <Route path='/create' element={<CreateWorkout />}/>
                </Routes>
             </BrowserRouter>
        )
    }
}

const appDiv = document.getElementById("app")
const root = createRoot(appDiv)
root.render(<App />)