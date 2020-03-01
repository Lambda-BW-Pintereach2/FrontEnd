import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const handleChanges = e => {
        setlogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post("/login", login)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                setlogin(login)
                setlogin({
                    email: "",
                    password: ""
                })
                props.histroy.push("/")
            })
            .catch(err => {
                localStorage.removeItem("token")
                console.log("Thank you try again", err)
            }, [])
    }
    return (
        <div>
            <br />
            <form>
                <input
                    type="text"
                    name="email"
                    value={login.email}
                    placeholder="Email"
                    onChange={handleChanges}
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    placeholder="Password"
                    onChange={handleChanges}
                />
                <br />
                <br />
                <button>Log In</button>
            </form>
        </div>
    )
};

export default Login;
