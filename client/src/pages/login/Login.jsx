import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    
    
    <div className='login'>
      <div className='card'>
   
        <div className='left'>
          <h1>Let's Connect</h1>
          <p>Feature your thought into virtual world</p>
          <span>Don't you have account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className='right'>
          <h1>Login here</h1>
          <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange}/>
            <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
            {err && err}
            <button onClick={handleLogin}>Login</button>
            <Link to="/register">
            <button className='forMobile'>Register</button>
          </Link>
          </form>
        </div>
      </div>
    

    </div>
  );
}



export default Login;
