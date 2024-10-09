import React from 'react';
import axios from 'axios'
import '../../App.css'
export default function Register() {
    const RegisterUser = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = {
            username: username,
            password: password,
            email: email
        };

        axios.post('https://walletwatch-server.vercel.app/api/users/register', data)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
    }

    return (
        <div className="container">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={RegisterUser} method='post' action='https://walletwatch-server.vercel.app/api/users/register'>
                <h3>Register Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="username" name="username" />

                <label for="email">email</label>
                <input type="email" placeholder="email" name="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="password" name="password" />

                <button>Log In</button>
                <a href='/login'>Already have account</a>
            </form>
        </div>
    );
}
