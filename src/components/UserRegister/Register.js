import  {React} from 'react';
import './register.css';
import { Link } from 'react-router-dom';





/*

const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({
  path: './../../../.env'
});
const db = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
})






db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("MYSQL CONNECTED")
  }
}) */









const Register = () => {


  return (
    <>
          <div className="contact main-register">
              
        <div className="left-contact register">
          <h3>Register Your Account </h3>
          <p>Get Access to Events and our Book Store</p>
          <h2> Register </h2>
        </div>

      <div className="user-registration-right-side">
                  
          <form className="form-user-registration" >
            
            
            <label for="name">Enter Your Name</label>

            <input type="text" className='box' placeholder="Your Name" name='name'></input>     
            <label for="phone">Enter Your Phone number:</label>

            <input type="tel" className='box' name='number' placeholder="+91 .........." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
            ></input>
                              
            <label for="e-mail">Enter Your Email-Id</label>
            <input type="e-mail" className='box' placeholder="Type Your E-mail " required name='e-mail'/>

            <label for="password">Enter Your Password</label>
            <input type="password" className='box' placeholder="Type Password " required name='password'/>

            <div className="user-button">

              <button className="button register-button">Register </button>
              <p className='forget-password'>Already Registered ? <br/><Link to='/login' className='forget-password loginto'>Login to Your Account </Link></p>

              </div>
              
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
