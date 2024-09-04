import React from "react";
import axios from 'axios';
import { useState } from "react";

export function UserData (){
      const[post,setPost] = useState({
        email : '',
        password : ''
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
        <div className="d-flex align-items-center justify-content-center vh-100 w-100">
            <div className="w-50 text-center">
                <form onSubmit={handleSubmit}>
                    Email : <input type="email" onChange={handleInput} name="email" /><br /><br />
                    Password : <input type="password" onChange={handleInput} name="password" /><br /><br />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
};


