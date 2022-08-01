import React, { Component } from "react"
import { Form, Row, Input, Label, FormGroup, Col, Button } from 'reactstrap'


export default class CreateWorkout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <Form>
            <Row>
            <Col md={6}>
                <FormGroup>
                <Label for="exercise">
                    Exercise
                </Label>
                <Input
                    id="exercise"
                    name="exercise"
                    placeholder="enter exercise here"
                    type="exercise"
                />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                <Label for="reps">
                    Number of Reps
                </Label>
                <Input
                    id="reps"
                    name="reps"
                    placeholder="enter amount of reps"
                    type="number"
                />
                </FormGroup>
            </Col>
            </Row>
            <FormGroup>
            <Label for="sets">
                Number of Sets
            </Label>
            <Input
                id="sets"
                name="sets"
                placeholder="enter amount of sets"
                type="number"
            />
            </FormGroup>
            <Button>
            Record Exercise
            </Button>
        </Form>
      )
      
    }
}