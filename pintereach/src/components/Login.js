// import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth'

// const Login = (props) => {
//     const [login, setlogin] = useState({
//         email: "",
//         password: ""
//     })

//     const handleChanges = e => {
//         setlogin({
//             ...login,
//             [e.target.name]: e.target.value
//         })
//     }

//     const onSubmit = e => {
//         e.preventDefault()
//         axiosWithAuth()
//             .post("/login", login)
//             .then(res => {
//                 localStorage.setItem("token", res.data.payload)
//                 setlogin(login)
//                 setlogin({
//                     email: "",
//                     password: ""
//                 })
//                 props.histroy.push("/")
//             })
//             .catch(err => {
//                 localStorage.removeItem("token")
//                 console.log("Thank you try again", err)
//             }, [])
//     }
//     return (
//         <div>
//             <br />
//             <form>
//                 <input
//                     type="text"
//                     name="email"
//                     value={login.email}
//                     placeholder="Email"
//                     onChange={handleChanges}
//                 />
//                 <br />
//                 <br />
//                 <input
//                     type="password"
//                     name="password"
//                     value={login.password}
//                     placeholder="Password"
//                     onChange={handleChanges}
//                 />
//                 <br />
//                 <br />
//                 <button>Log In</button>
//             </form>
//         </div>
//     )
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../actions/UserActions';

const Login = (status) => {
    const { push } = useHistory()
    const userLoggin = useSelector(state => state.loggedIn)
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
                console.log(res, `success`)
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
                    {console.log(users)}
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

