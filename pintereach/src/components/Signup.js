import React, { useState, useEffect } from 'react';

const Signup = (status) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("Status has changed!", status)
        status && setUsers(users => [...users, status])
    }, [status])
    return (
        <div>
            <br />
            <form>
                <input
                    type="text"
                    name="username"
                    value=""
                    placeholder="Username"
                />
                <br />
                <br />
                <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="Email"
                />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    value=""
                    placeholder="Password"
                />
                <br />
                <br />
                <button>Sign In</button>
            </form>
        </div>
    )
};

export default Signup;
