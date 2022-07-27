import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ setCurrentUser }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]= useState()
    // const history = useHistory();

    function handleLogIn(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.errors){
                setErrors(data.errors)
            }else {
                setCurrentUser(data)
                // history.push('/') 
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="form-container">
            <h2>Log In</h2>
            {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
            <form onSubmit={(e) => handleLogIn(e)}>
                <label htmlFor='email'>
                    Email: 
                </label>
                <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
                
                <label htmlFor='password'>
                    Password: 
                </label>
                
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="submit" value="Log In">
                </input>
            </form>
        </div>

    )
}

export default Login;
