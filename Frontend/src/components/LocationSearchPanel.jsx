const LocationSearchPanel = ({setPanelOpen,setVehiclePanelOpen}) => {
  const locations=[
    "24B,Near Kapoor's cafe, Sheriyan coding school,bhopal",
    "24C,Near Smith's cafe, Kbc coding school,bhopal",
    "22A,Near Kane's cafe, oxford english school,bhopal",
  ]
  return (
    <div>
      {
        locations.map((item)=>(
          <div onClick={()=>{
            setVehiclePanelOpen(true)
            setPanelOpen(false)
          }}
          key={item} 
           className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl  items-center my-2 justify-start">
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{item}</h4>
        </div>
        ))
      }
    </div>
  );
};

export default LocationSearchPanel;
