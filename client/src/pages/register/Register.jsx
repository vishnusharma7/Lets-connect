import { Link } from 'react-router-dom';
import axios from "axios";
import './register.scss';
import { useState } from "react";

function Register() {


  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  })
  const [err,setErr] = useState(null);

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }
  // console.log(inputs)

  const handleClick =async e=>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)

    }catch(err){
      setErr(err.response.data)

    }
  }

  console.log(err)

  return (
    <div className='register'>
      <div className='card'>
          <div className='left'>
              <h1>Get Ready</h1>
              <p>Connect. Share. Inspire. Your Social Journey Begins Here! and Unlock Your Social Passport. Start Exploring Today!</p>
              <span>Do you have account?</span>
              <Link to = "/login">
                <button>Login</button>
                </Link>
                
          </div>
          <div className='right'>
            <h1>Register</h1>
            <form>
              <input type='text' placeholder='username' name='username' onChange={handleChange}/>
              <input type='email' placeholder='Enter your mail' name='email' onChange={handleChange}/>
              <input type='password' placeholder='Password' name='password' onChange={handleChange} />
              <input type='text' placeholder='Enter your good name' name='name' onChange={handleChange}/>
              {err && err}
              <button onClick={handleClick}>Register</button>
              <Link to = "/login">
                <button className='forMobile'>Login</button>
                </Link>
            </form>

          </div>
      </div>
    </div>
  );
}

export default Register;
