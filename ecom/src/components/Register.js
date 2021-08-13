import {React, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from './Navbar'

function Register() {

  useEffect(()=>{
      if(localStorage.getItem('user-info'))
      {
        userhistory.push("/add")
      }
      

  },[])

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const userhistory=useHistory();




   async function signup(){
            

            let item ={name,email,password};
            console.warn(item);
            
            // sending data to database 
            let result = await fetch("http://localhost:8000/api/register",{
                method:'post',
                body:JSON.stringify(item),
                headers:{
                    "Content-type":'application/json',
                    "accept": 'application/json'
                }
            })
            result=await result.json()
            console.warn("result",result)
            localStorage.setItem("user-info",JSON.stringify(result))
            userhistory.push("/add")

    }
    return (
      <>
      <Navbar />
        
        <div className="container">
            
        
            <div className="col-sm-3 g-3 offset-sm-3" >
            <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" value={name} className="form-control" placeholder="Enter your name here" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e)=> setName(e.target.value)} />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" value={email}  className="form-control" placeholder="Enter your Email Here" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label   className="form-label">Password</label>
    <input type="password" value={password}  placeholder="Enter your password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  
  <button onClick={signup} type="submit" className="btn btn-primary">Submit</button>
</div>
</div>
</>
    
    )
}

export default Register
