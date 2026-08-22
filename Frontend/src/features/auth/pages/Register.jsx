import React from 'react'
import { Link } from 'react-router'

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor='Username'>Username</label>
                    <input type='text' id='Username' name='Username' placeholder='Enter Username' />
                </div>

                <div className="input-group">
                    <label htmlFor='eamil'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Enter email address' />
                </div>

                <div className="input-group">
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' placeholder='Enter password' />
                </div>

                <button className='button primary-button'>Register</button>
            </form>

            <p>Already an account?<Link to={"/login"}> Login</Link></p>
        </div>
    </main>
  )
}

export default Register