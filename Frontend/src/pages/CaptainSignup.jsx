import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const userData={
      fullname:{
        firstName,
        lastName
      },
      email,
      password
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
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
        <h3 className="text-lg font-medium mb-2">{"What's our Captain's name"}</h3>
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="bg-[#eeeeee]  px-4 py-2 rounded border w-1/2 text-lg placeholder:text-base"
          />
          <input
            type="text"
            placeholder="last name"
            className="bg-[#eeeeee] px-4 py-2 rounded border w-1/2 text-lg placeholder:text-base"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <h3 className="text-lg font-medium mb-2">{"What's our Captain's email"}</h3>
        <input
          type="email"
          placeholder="email@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#eeeeee] mb-5 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#eeeeee] mb-5 px-4 py-2 rounded border w-full text-lg placeholder:text-base"
        />
        <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded  w-full">
          Register
        </button>
      </form>
      <p className="text-center">
        Already have a account?
        <Link to="/captain-login" className="text-blue-600">
          Login Here
        </Link>
      </p>
    </div>
    <div>
      <p className="text=[6px] leading-tight">
       This site is protected by reCAPTCHA and the <span className="underline">Google privacy</span>
       and <span className="underline">Terms of Services apply</span>
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup