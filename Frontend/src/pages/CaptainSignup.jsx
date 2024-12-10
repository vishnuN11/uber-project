import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios"
const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate=useNavigate()
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname:firstName,
        lastname:lastName,
      },
      email,
      password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    };
   
    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    if (response.status===201) {
      const data=response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate("/captain-home")
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleCapacity('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
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
          <h3 className="text-lg font-medium mb-2">
            {"What's our Captain's name"}
          </h3>
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
          <h3 className="text-lg font-medium mb-2">
            {"What's our Captain's email"}
          </h3>
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
          <h3>Vehicle Information</h3>
          <div className="flex gap-4 mb-4">
          <input
            required
            type="text"
            placeholder="Vehicle Color"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="bg-[#eeeeee] mb-5 px-4 py-2 rounded-lg border w-1/2 text-lg placeholder:text-base"
          />
          <input
            required
            type="text"
            placeholder="Vehicle Plate"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className="bg-[#eeeeee] mb-5 px-4 py-2 rounded-lg border w-1/2 text-lg placeholder:text-base"
          />
          </div>
          <div className='flex gap-4 mb-7'>
          <input
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
            type="number"
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value)
            }}
          />
          <select
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value)
            }}
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
        </div>
        
          <button className="bg-[#111] text-white font-semibold mb-3 px-4 py-2 rounded  w-full">
            Create Captain Account
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
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google privacy</span>
          and <span className="underline">Terms of Services apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
