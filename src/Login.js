import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from './Features/userSlice';

const Login = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

     dispatch(
        login({
            name:name,
            email:email,
            password:password,
            loggedIn : true,
        })
     )

  return (
    <div className='login'>
        <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>Login Here</h1>
            Name: <input type='text' 
            name='name' placeholder='name' 
            value={name}
            onChange={(e) => setName(e.target.value)}/><br/> <br/>
            email  :<input type='email' 
            name='email' 
            placeholder='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}/><br/> <br/>
             password: <input type='password' 
             name='name' placeholder='password' 
             value={password}
             onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='submit_btn'> Submit</button>

        </form>
      
    </div>
  )
}

export default Login
