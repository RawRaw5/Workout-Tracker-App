import { useState } from 'react'
const React = require('react')



export default function Journal () {

    const [workoutList, setWorkoutList] = useState([{ workout:'' }])

    return (
        <main>
            <h1>Log Workouts</h1>
            <div>
            <label htmlFor='name'>Excerise Type</label>
            {workoutList.map((singleWorkout, index) => (
                <div key={index}>
                <input id='name' name='name' required />
                {workoutList.length - 1 === index && workoutList.length < 4 && <button>Add Workout</button>}
                </div>
            ))}
            </div>
                {workoutList.length > 1 && <button type='button'>Delete</button>}
        </main>
    )
}

