import React, { Component } from "react"
import { useEffect, useState } from "react";

function Workout() {
        let [workouts, setWorkspace] = useState('workouts')
     async function api() {
        let api = await fetch ("http://127.0.0.1:8000/workouts")
        let data = await api.json()
            setWorkspace(JSON.stringify(data))
    }
    api()
        return <p>Welcome to your workout page {workouts}</p>
}

export default Workout