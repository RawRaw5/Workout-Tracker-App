import React, { Component } from "react"
import { Form, Row, Input, Label, FormGroup, Col, Button } from 'reactstrap'


export default class CreateWorkout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <Form className="exercise-form">
            <Label>Exercise Form</Label>
            <Row/>
            <Label for="exercise" className="exercise">Exercise</Label>
            <Input
                id="exercise"
                name="exercise"
                placeholder="enter exercise here"
                type="name"
                required
            />
            <Row/>
            <Label for="reps" className="reps">Number of Reps</Label>
            <Input
                id="reps"
                name="reps"
                placeholder="enter number of reps"
                type="number"
                required
            />
            <Row/>
            <Label for="sets" className="sets">Number of Sets</Label>
            <Input
                id="sets"
                name="sets"
                placeholder="enter number of sets"
                type="number"
                required
            />
            <Row/>
            <Button>
                Record Exercise
            </Button>
            <Button>
                Finish Workout
            </Button>
        </Form>
      )
      
    }
}