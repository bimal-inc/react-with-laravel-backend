import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {

    const userhistory=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
          userhistory.push("/add")
        }
        
  
    },[])
    return (
        <div>
            <Navbar />
            <h1>hello</h1>
        </div>
    )
}

export default Login
