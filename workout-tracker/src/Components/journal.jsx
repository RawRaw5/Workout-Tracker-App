const React = require('react')



export default function Journal () {

    return (
        <main>
            <h1>Add New Exercise</h1>
            <form>
                <div className='exercise-form'>
                    <label htmlFor='name'>Exercise</label>
                    <input className='exercise-name' id='exercise' name='exercise' required/>
                </div>
                <div className='reps-form'>
                    <label htmlFor='number'>Reps</label>
                    <input className='reps-amount' id='reps' name='reps' required />
                </div>
                <div className='sets-form'>
                    <label htmlFor='number'>Sets</label>
                    <input className='sets-amount' id='sets' name='sets' required />
                </div>
                <br />
                <input className='submit-exercise' type="submit" value="Add Exercise" />
                <input className='submit-workout' type="submit" value="Complete Workout" />
            </form>
        </main>
    )    
}