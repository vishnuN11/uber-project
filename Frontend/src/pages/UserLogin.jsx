import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const navigate=useNavigate()
  const {user,setUser}=useContext(UserDataContext)
  const submitHandler = async(e) => {
    e.preventDefault();
    const userData={email,password}
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if (response.status===200) {
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate("/home")
    }
    setEmail('')
    setPassword('')
    
  };
  return (
    <div className="p-7 h-screen flex justify-between flex-col">
      <div>
        <img
          className="w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">{"What's your email"}</h3>

          <input
            type="email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded  w-full">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?
          <Link to="/signup" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login" className="flex justify-center items-center bg-[#10b461] text-white font-semibold mb-5 px-4 py-2 rounded  w-full">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
