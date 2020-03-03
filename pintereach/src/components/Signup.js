import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Signup = (status) => {
    const { push } = useHistory()
    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('https://medcabinet1.herokuapp.com/api/auth/register', users)
            .then(res => {
                console.log(res, `success`)
                push("/login")
            })
            .catch(err => console.log(err) &
                alert("This one is taken, try again"))
    }

    const handleChanges = (e) => {
        e.preventDefault()
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <>
                <br />
                <form onSubmit={handleSubmit}>
                    <input

                        type="text"
                        name="username"
                        value={users.username}
                        placeholder="Username"
                        onChange={handleChanges}
                    />
                    <br />
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={users.email}
                        placeholder="Email"
                        onChange={handleChanges}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={users.password}
                        placeholder="Password"
                        onChange={handleChanges}
                    />
                    <br />
                    <br />
                    <button>Sign In</button>
                </form>
            </>
        </div>
    )
}

export default Signup;
