import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/UserActions';

const Login = () => {
    const { push } = useHistory()
    // const userLoggin = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    const [users, setUsers] = useState({
        username: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('https://medcabinet1.herokuapp.com/api/auth/login', users)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                dispatch(setLoggedIn(true))
                console.log(`Success Login`, res)
                push("/dashboard")
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
                    {console.log("Is the user logged in", users)}
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

export default Login;

