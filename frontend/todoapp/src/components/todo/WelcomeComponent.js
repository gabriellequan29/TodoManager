import React from 'react'
import { useParams } from "react-router-dom"

export default function WelcomeComponent() {
   
    let {name} = useParams()
    return <div>
                <h1>{name} Welcome to your Todo Application!</h1>
            </div>
}

