import { useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Protectedroute(props) {

    

    let Cmp=props.Cmp
    const userhistory=useHistory();

    

    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
          userhistory.push("/register")
        }
        
  
    },[])
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protectedroute
