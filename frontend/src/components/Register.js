import React from 'react'
import axios from 'axios'


const Register = () => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </form>
        </div>
    )
}

export default Register