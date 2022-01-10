import React from 'react'
import { Link, useParams } from "react-router-dom"

export default function WelcomeComponent() {
   
    let {name} = useParams()
    return <div>
                <h1>{name} Welcome to your Todo Application!</h1>
                You can manage your todos <Link to="/todos">here</Link>
            </div>
}

