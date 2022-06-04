import React,{useState,useContext} from "react";
// import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const {login} = useContext(AuthContext)
// const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };
const handleOnSubmit = (e)=>{
    e.preventDefault();
    //TODO:
    login();
    // navigate("/posts")
}

  return (
    <form onSubmit={handleOnSubmit}> 
      Login
      <input type="emil" name="email" id="" placeholder="email" onChange={handleOnChange} />
      <input type="password" name="password" placeholder="password" id="" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
