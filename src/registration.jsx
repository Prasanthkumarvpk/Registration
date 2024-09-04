// import { useState } from "react";
import { useFormik } from "formik";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// import { Login } from "./login";
// import {UserData} from './login'
import axios from 'axios';

export function FormDemo(){

    function ValidateUser(FormData){
        var errors = {First_name:'', Last_name:'', Email:'', Password:'', Confirm_Password:''};

        if(FormData.First_name==="") {
            errors.First_name = "First_name is required"
        } else {
            if(FormData.First_name.length<4) {
                errors.First_name="Name too short";
            }
        }

        if(FormData.Last_name==="") {
            errors.Last_name = "Last_name is required"
        } else {
            if(FormData.Last_name.length<4) {
                errors.Last_name="Name too short";
            }
        }

        if(FormData.Email==="") {
            errors.Email = "Required : Please enter valid email id"
        } else {
            if(FormData.Email.length<4) {
                errors.Email="Name too short";
            }
        }

        if(FormData.Password==="") {
            errors.Password = "Required : Minimum 8 characters with 1 UpperCase Letter"
        } else {
            if(FormData.Password.length<4) {
                errors.Password="Invalid Password";
            }
        }

        if(FormData.Password==="") {
            errors.Email = "Required : Please Confirm Password"
        } else {
            if(FormData.Email.length<4) {
                errors.Email="Re-enter Correct Password";
            }
        }

        return errors;
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post("https://api.vizagupdates.com/api/register")
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
   
    const formik = useFormik({
         initialValues: {
                First_name: '',
                Last_name: '',
                Email: '',
                Password: '',
                Confirm_Password: '',
         },
         validate: ValidateUser,
         onSubmit: (values)=> {
             alert(JSON.stringify(values));
         }
    })

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
           <form>
           <h2>Register User</h2>
            <dl>
                <dt>First_Name :</dt>
                <dd><input type="text" onChange={formik.handleChange}  name="fname" /></dd>
                <dd className="text-danger"> {formik.errors.UserId} </dd>
                <dt>Last_Name :</dt>
                <dd><input type="text" onChange={formik.handleChange} name="lname" /></dd>
                <dt>Email :</dt>
                <dd><input type="email" name="email" onChange={formik.handleChange} /></dd>
                <dt>Password :</dt>
                <dd>
                    <input type="password" name="pword" onChange={formik.handleChange}  /> 
                </dd>
                <dt>Confirm Password :</dt>
                <dd>
                <input type="password" name="pword" onChange={formik.handleChange}  /> 
                </dd>
            </dl>
            <button onSumbit={handleSubmit} className="btn btn-primary">Register</button>
           </form>
           {/* <Login />
           <UserData /> */}
        </div>
    )
}