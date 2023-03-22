import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/login.css';

export default function Login(props) {

    const [creds, setcreds] = useState({email:"",password:""});
    let history = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("https://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: creds.email,password: creds.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the token and redirect
            localStorage.setItem('token',json.authtoken);
            history.push("/");
          }
          else{
            alert("wrong creds");
          }
    }

    const onChange = (e) =>{
        setcreds({...creds, [e.target.name]:[e.target.value]})
    }

    return (
        <>
            <div className="main-body">
                <div className="top-logo">
                    <p className="name">Wise Wallet</p>
                    <Link to="/signup">
                        <p className="page">Sign Up</p>
                    </Link>
                </div>
                <div className="middle-pic">
                    <img src={require("../images/logo2.jpg")} alt="" className="pic" />
                </div>
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <div className="login-card">
                        <h3>Login</h3>
                        <br />

                        <input type="emailt" name="email" className='login' value={creds.email} onChange={onChange} placeholder='Email' />
                        
                        <input type="password" name="password" className='login' value={creds.password} onChange={onChange} placeholder='Password' />

                        <button type='submit' className="btn">login</button>

                    </div>
                </form>
            </div>
        </>
    )
}
