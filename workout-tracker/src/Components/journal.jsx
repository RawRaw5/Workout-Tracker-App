import { useState } from 'react'
const React = require('react')



export default function Journal () {

    const [workoutList, setWorkoutList] = useState([{ workout:'' }])

    const handleWorkoutAdd = () => {
        setWorkoutList([...workoutList, { workout: ''}])
    }

    const handleWorkoutRemove = (index) => {
        const list = [...workoutList]
        list.splice(index, 1)
        setWorkoutList(list)
    }

    return (
        <main>
            <h1>Log Workouts</h1>
            <div>
                <label htmlFor='name'>Excerise Type</label>
                {workoutList.map((singleWorkout, index) => (
                    <div key={index} className='workouts'>
                        <div className='addbtn'>
                            <input id='name' name='name' required />
                            {workoutList.length - 1 === index &&
                            workoutList.length < 4 && 
                            (
                                <button onClick={handleWorkoutAdd}>Add Workout</button>
                            )}
                        </div>
                         <div className='removebtn'>
                            {workoutList.length > 1 && 
                            (
                                <button type='button' onClick={() => handleWorkoutRemove(index)}>Delete</button>
                            )}
                        </div>
                    </div>
                ))}  
            </div>        
        </main>
    )
}

