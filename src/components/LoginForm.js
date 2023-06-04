// Credit: https://www.copycat.dev/blog/material-ui-form/

import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import fetchData from '../utils/fetchData';

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetchData().then(response => {
            props.setAccounts(response);

            setEmailError(false)
            setPasswordError(false)
    
            if (email === '') {
                setEmailError(true)
            }
            if (password === '') {
                setPasswordError(true)
            }

            const filtered = response.filter(user => email === user.email && password === user.password);
            if (filtered.length > 0) {
                props.setSaved(filtered[0].saved);
                props.setLogin({inLogin: false,
                    email: email,
                    password : password
                });
            } else if (email && password) {
                const elem = document.getElementById('ravenous-login-form');
                const warning =  "<small style='color: red'>This will create a new account.</small>"
                elem.innerHTML = elem.innerHTML + (elem.innerHTML.includes(warning) ? "" : warning);

                setTimeout(() => {
                    props.setNewAccount(true);
                    props.setSaved([]);
                    props.setLogin({inLogin: false,
                                email: email,
                                password : password
                    });
                }, 1000);
            }
        })
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