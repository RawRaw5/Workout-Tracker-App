import { useState } from 'react'
const React = require('react')



export default function Journal () {

    const [workoutList, setWorkoutList] = useState([{ workout:'' }])
//Helper function for adding workouts
    const handleWorkoutAdd = () => {
        setWorkoutList([...workoutList, { workout: ''}])
    }
//Helper function for removing workouts
    const handleWorkoutRemove = (index) => {
        const list = [...workoutList]
        list.splice(index, 1)
        setWorkoutList(list)
    }

    return (
        <main className='journal-page'>
            <h1>Log Workouts</h1>
            <div>
                <label htmlFor='name'>Excerise Type</label>
                {workoutList.map((singleWorkout, index) => (
                    <div key={index} className='workouts'>
                        <div className='addbtn'>
                            <div className='btnrow'>
                            <input id='name' name='name' required />
                            {workoutList.length - 1 === index &&
                            workoutList.length < 4 && 
                            (
                                <button onClick={handleWorkoutAdd}>Add </button>
                            )}
                            </div>
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

