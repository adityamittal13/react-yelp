// Credit: https://www.copycat.dev/blog/material-ui-form/

import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { data } from '../data/users';

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [firstClick, setFirstClick] = useState(true);
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email === '') {
            setEmailError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }

        const filtered = props.accounts.filter(user => email === user.email && password === user.password)
        console.log(filtered);
        if (filtered.length > 0) {
            props.setSaved(filtered[0].saved);
            props.setLogin({inLogin: false,
                email: email,
                password : password
            });
        } else if (email && password && firstClick) {
            const elem = document.getElementById('ravenous-login-form');
            const warning =  "<small style='color: red'>This will create a new account. Confirm this choice by clicking above.</small>"
            elem.innerHTML = elem.innerHTML + (elem.innerHTML.includes(warning) ? "" : warning);
            setFirstClick(false);
        } else if (email && password && !firstClick) {
            props.setSaved([]);
            props.setLogin({inLogin: false,
                        email: email,
                        password : password
            });
            props.setAccounts(prev => [{email, password, saved: []}, ...prev]);
        }
    }

    return (
        <div>
            <React.Fragment>
                <form id="ravenous-login-form" onSubmit={handleSubmit}>
                        <h2 className="login-header">Login Form</h2>
                        <br/>
                        <TextField 
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="email"
                            sx={{mb: 3, ml: 3, mr: 3, width: 3/4}}
                            value={email}
                            error={emailError}
                        />
                        <TextField 
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="password"
                            value={password}
                            error={passwordError}
                            sx={{mb: 3, ml: 3, mr: 3, width: 3/4}}
                        />
                        <br/>
                        <Button variant="outlined" color="secondary" type="submit">Login</Button>
                        <br/> <br/>
                </form>
            </React.Fragment>
        </div>
    );
}

export default LoginForm;