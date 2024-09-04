import React from "react";
import axios from 'axios';
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


export function UserData (){
      const[post,setPost] = useState({
        first_name : '',
        last_name : '',
        email : '',
        password : '',
        password_confirmation : ''
      })
    const handleInput = (event) => {
        setPost({...post,[event.target.name] : event.target.event})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post("https://api.vizagupdates.com/api/register",{post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
           <form onSumbit={handleSubmit}>
           <h2>Register User</h2>
            <dl>
                <dt>First_Name :</dt>
                <dd><input type="text" onChange={handleInput}  name="fname" /></dd>
                <dd className="text-danger">  </dd>
                <dt>Last_Name :</dt>
                <dd><input type="text" onChange={handleInput} name="lname" /></dd>
                <dt>Email :</dt>
                <dd><input type="email" name="email" onChange={handleInput} /></dd>
                <dt>Password :</dt>
                <dd>
                    <input type="password" name="pword" onChange={handleInput}  /> 
                </dd>
                <dt>Confirm Password :</dt>
                <dd>
                <input type="password" name="pword" onChange={handleInput}  /> 
                </dd>
            </dl>
            <button className="btn btn-primary">Register</button>
           </form>
        </div>
    )
};