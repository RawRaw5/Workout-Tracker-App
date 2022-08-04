import React, { Component } from "react"

import { Button } from "@material-ui/core"
import  Grid  from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core/"
import TextField from "@material-ui/core/TextField"

import FormControl from "@material-ui/core/FormControl"



export default class CreateWorkout extends Component {
    constructor(props) {
        super(props) 

        this.handleExercisesChange = this.handleExercisesChange.bind(this)
        this.handleRepsChange = this.handleRepsChange.bind(this)
        this.handleSetsChange = this.handleSetsChange.bind(this)
        this.handleWorkoutButtonPressed = this.handleWorkoutButtonPressed.bind(this)
    }
    handleWorkoutButtonPressed() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                exercises: this.state.exercises,
                reps: this.state.reps,
                sets: this.state.sets
            }),
        }
        fetch('/api/workouts', requestOptions).then((response) => 
        response.json()
        ).then((data) => console.log(data))
    }

    handleExercisesChange(e) {
        this.setState({
            exercises: e.target.value
        })
    }

    handleRepsChange(e) {
        this.setState({
            reps: e.target.value
        })
    }

    handleSetsChange(e) {
        this.setState({
            sets: e.target.value
        })
    
    
    
}

    render() {
        return  <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create A Workout
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <div align="center">Exercise</div>
                    <br></br>
                    <TextField
                     required={true} 
                     type="text"
                     onChange={this.handleExercisesChange} 
                     inputProps={{style: { textAlign: "center"}
                    }}/>
                    <br></br>
                    <div align="center">Number of Reps</div>
                    <br></br>
                    <TextField 
                    required={true}
                    type="number"
                    onChange={this.handleRepsChange} 
                    inputProps={{min:1, style: { textAlign: "center"}
                    }}/>
                    <br></br>
                    <div align="center">Number of Sets</div>
                    <br></br>
                    <TextField 
                    required={true} 
                    type="number"
                    onChange={this.handleSetsChange}
                    inputProps={{min:1, style: { textAlign: "center"}
                    }}/>
                    <br></br>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={this.handleWorkoutButtonPressed}>
                    Create Exercise
                </Button>
            </Grid>
        </Grid>
      
      
    }
}