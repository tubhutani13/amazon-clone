import React from 'react'
import './Login.css';
import { Link} from 'react-router-dom';
function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="login__logo"
                    alt="Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input  type="email"  />
                    <h5>Password</h5>
                    <input type="password" />
                    <Link to="/">
                        <button
                            className="login__signInButton"
                            type="submit"
                        >Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    className="login__registerButton"
                    type='register'
                >Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login