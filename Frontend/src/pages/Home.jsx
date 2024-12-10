import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen,setVehiclePanelOpen]=useState(false)
  const [confirmedRidePanel,setConfirmedRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState()
  const [waitingForDriver,setWaitingForDriver]=useState(false)
  const confirmedRidePanelRef=useRef(null)
  const panelRef = useRef(null);
  const panelClosedRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef=useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelClosedRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelClosedRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(function(){
   if (vehiclePanelOpen) {
    gsap.to(vehiclePanelRef.current,{
      transform:"translateY(0)"
    })
   }else{
    gsap.to(vehiclePanelRef.current,{
      transform:"translateY(100%)"
    })
   }
  },[vehiclePanelOpen])

  useGSAP(function(){
   if (confirmedRidePanel) {
    gsap.to(confirmedRidePanelRef.current,{
      transform:"translateY(0)"
    })
   }else{
    gsap.to(confirmedRidePanelRef.current,{
      transform:"translateY(100%)"
    })
   }
  },[confirmedRidePanel])

  useGSAP(function(){
   if (vehicleFound) {
    gsap.to(vehicleFoundRef.current,{
      transform:"translateY(0)"
    })
   }else{
    gsap.to(vehicleFoundRef.current,{
      transform:"translateY(100%)"
    })
   }
  },[vehicleFound])

  useGSAP(function(){
   if (waitingForDriver) {
    gsap.to(waitingForDriverRef.current,{
      transform:"translateY(0)"
    })
   }else{
    gsap.to(waitingForDriverRef.current,{
      transform:"translateY(100%)"
    })
   }
  },[waitingForDriver])
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col h-screen justify-end absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={() => setPanelOpen(false)}
            ref={panelClosedRef}
            className="absolute top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-8 bg-gray-900 rounded"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
       <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmedRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
       <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
      <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
