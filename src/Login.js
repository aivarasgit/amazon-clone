import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login(){
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = event =>{
		event.preventDefault();
			auth.signInWithEmailAndPassword(email, password).
			then((auth)=>{
				
			history.push('/');
			
			}).catch((e)=>{alert(e.message)});
	};
	
	const register = event =>{
		event.preventDefault();
		auth.createUserWithEmailAndPassword(email, password).then(
		(auth)=>{ 
			
			history.push('/');
			
		}).catch((e)=>{alert(e.message)});
	};
	
	return <div className="Login">
			<img src="https://logolog.co/wp-content/uploads/2005/05/amazon-logo.png" className="login__Logo" alt="Login logo"/>
			<h1>Sign in</h1>
 
			<form>
				<h5>E-mail</h5>
					<input value={email} onChange={event=>setEmail(event.target.value)} name="login__Email" type="email"/>	
				<h5>Password</h5>
					<input value={password} onChange={event=>setPassword(event.target.value)} name="login__Passowrd" type="password"/>
				<button type="submit" onClick={login}>Log in</button>
			</form>
			<p>
			By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
			</p>

			<button className="product__button" onClick={register}>Create your Amazon account</button>
		</div>;
	
}

export default Login;
