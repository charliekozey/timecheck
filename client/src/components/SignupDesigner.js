import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupDesigner({ setCurrentUser }) {
    // const history = useHistory();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors]= useState()
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleCreateDesigner(e) {
        e.preventDefault();

        fetch('/designers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setCurrentUser(data)
            
        })
        .catch(error => console.log(error))

        // history.push('/');
    }


    return (
        <div className="form-container">
            <h2>Sign up as a designer:</h2>
            <form onSubmit={(e) => handleCreateDesigner(e)}>
                <label htmlfor="username">
                    Username: 
                </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                
                <label htmlfor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                
                <label htmlfor="confirm-password">
                    Confirm Password: 
                </label>
                <input type="password" name="confirm-password" id="confirm-password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>

                <input type="submit" value="Sign Up">
                </input>
            </form>
        </div>

    )
}

export default SignupDesigner;
