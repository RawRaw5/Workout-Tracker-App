import React, { Component } from "react"



export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <main>
                <h1>Workout Tracking App</h1>
                    <div className="home">  
                        <p>Welcome to Workout Tracking App where you can create your daily workouts</p>
                    </div>
                    <div className="about">
                        <h2>Description</h2>
                            <p>We both had the role of being Full-stack Developers for this project. For the frontend we used React and for backend we used Python with Django. We decided to implement Django because it’s a framework neither of us were familiar with and didn’t learn in our bootcamp course, so we wanted to challenge ourselves and learn something new. Facing many challenges and issues, we had the opportunity to learn a lot through trail and error. A few of those issues that we found solutions to were coding with Python/Django and Git commands. </p>
                    </div>
                    <div className="technologies">
                        <h2>Technologies</h2>
                            <p>Frontend - React, Javascript, Material UI, React-router-dom, Babel, Webpack</p>
                            <p>Backend - Python, Django, db.sqlite3 </p>
                    </div>
            </main>    
        )
    }
}
