import React from 'react'


const Login = () => {
    return (
        <div>
            <form>
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
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login