import React from 'react'
import './Login.css';
import { loginUrl } from "./spotify";


function Login (){
    return (
        <div className="login">
            <img src = 'thotify.webp' alt='' />
            <h2> Essentially Spotify but shittier </h2> 
            <a href = {loginUrl}> LINK with spotify or OnlyFans </a>

        </div>
    )
}

export default Login;
