import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import axios from 'axios';


 function LoginX() {

    const [first_name,setFirst_name] = useState('');
    const [last_name,setLast_name] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');

    const handleSubmit = () => async(e) => {
        e.preventDefault();
        const Register = {first_name, last_name, email, password, repassword};

        try {
            await axios.get('https://api.vizagupdates.com/api/register',Register);
            alert("Registered Successfully")
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
           <form onClick={handleSubmit} >
           <h2>Register User</h2>
            <label>First_name :
                <input type="text" placeholder="Enter Your First Name" onChange={(e)=>setFirst_name(e.target.value)}/>
            </label><br /><br />
            <label>Last_name :
                <input type="text" placeholder="Enter Your Last Name" onChange={(e)=>setLast_name(e.target.value)}/>
            </label><br /><br />
            <label>Enter Email :
                <input type="email" placeholder='Please Enter Email Address' onChange={(e)=>setEmail(e.target.value)} />
            </label><br /><br />
            <label>Enter Password :
                <input type="password" placeholder='Please Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
            </label><br /><br />
            <label>Re-enter Password :
                <input type="password" placeholder='Please Confirm Your Password' onChange={(e)=>setRepassword(e.target.value)} />
            </label><br /><br />
            <button>Submit</button>
           </form>
        </div>
    )
}

export default LoginX