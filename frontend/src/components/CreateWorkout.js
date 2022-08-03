import React, { Component } from "react"
import { Form, Row, Input, Label, FormGroup, Col } from 'reactstrap'
import { Button } from "@material-ui/core"
import  Grid  from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core/"
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import { Link } from "react-router-dom"
import { Radio } from "@material-ui/core/"
import { RadioGroup } from "@material-ui/core/"
import { FormControlLabel } from "@material-ui/core/"

export default class CreateWorkout extends Component {
    constructor(props) {
        super(props)
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
                    <TextField required={true} type="text" inputProps={{style: { textAlign: "center"}
                    }}/>
                    <br></br>
                    <div align="center">Number of Reps</div>
                    <br></br>
                    <TextField required={true} type="number" inputProps={{min:1, style: { textAlign: "center"}
                    }}/>
                    <br></br>
                    <div align="center">Number of Sets</div>
                    <br></br>
                    <TextField required={true} type="number" inputProps={{min:1, style: { textAlign: "center"}
                    }}/>
                    <br></br>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained">
                    Create Exercise
                </Button>
            </Grid>
        </Grid>
      
      
    }
}