import React, { Component } from "react"
import { render } from "react-dom"

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false, 
            placeholder: "Loading"
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/workouts')
            .then(response => {
                if(response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" }
                    })
                }
                return response.json()
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data, 
                        loaded: true
                    }
                })
            })
    }

    render() {
        return (
            <ul>
                {this.state.data.map(workouts => {
                    return (
                        <li key={workouts.id}>
                            {workouts.exercises} - {workouts.reps} -{workouts.sets}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Display


