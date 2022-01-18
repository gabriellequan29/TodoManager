import React from 'react'
import { Link, useParams } from "react-router-dom"

export default function WelcomeComponent() {
   
    
    return (
        <>
            <div className="container">
                <h1>Welcome!</h1>
                You can manage your todos <Link to="/todos">here</Link>
            </div>
        </>


        
        
    ) 
}

