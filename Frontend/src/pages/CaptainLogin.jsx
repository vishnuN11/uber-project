import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const userData={email,password}
    setEmail('')
    setPassword('')
    
  };
  return (
    <div className="p-7 h-screen flex justify-between flex-col">
    <div>
      <img
        className="w-14 "
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
        Join a fleet?
        <Link to="/captain-signup" className="text-blue-600">
          Register as a Captain
        </Link>
      </p>
    </div>
    <div>
      <Link to="/login" className="flex justify-center items-center bg-[#d5622d] text-white font-semibold mb-5 px-4 py-2 rounded  w-full">
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin