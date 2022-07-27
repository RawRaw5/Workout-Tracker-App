const React = require('react')


export default function Home () {
    return (    
        <div className="home-page">
            <h1>Workout Tracker</h1>
            <div className='days'>
                <button>Sunday</button>
                <button>Monday</button>
                <button>Tuesday</button>
                <button>Wednesday</button>
                <button>Thursday</button>
                <button>Friday</button>
                <button>Saturday</button>
            </div>
        </div>
        
    )
}