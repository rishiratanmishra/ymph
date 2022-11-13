import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = () => {
  return (
    <>
          <div className="contact main-login">
              
        <div className="left-contact left-login">
          <h3>Login Your Account </h3>
          <p>Get Access to Events and our Book Store</p>
          <h2> Login</h2>
        </div>

      <div className="user-registration-right-side right-login">
                  
          <form className="form-user-registration">
            
            <label for="e-mail">Enter Your Email-Id</label>
            <input type="e-mail" className='box' placeholder="Type Your E-mail " required></input>

            <label for="password">Enter Your Password</label>
            <input type="password" className='box' placeholder="Type Password " required></input>

            <div className="user-button">
            <p className='forget-password'><Link to='/forget-password' className='forget-password'>Forget Password ?</Link></p>

              <button className="button register-button">Login</button>
            </div>
              <Link to='/register' className='create-new-account'> <button className='button new-account'>Create New Account</button></Link>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
