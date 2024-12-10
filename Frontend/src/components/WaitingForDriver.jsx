
const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
    <h5
      onClick={() => setWaitingForDriver(false)}
      className="p-1 text-center w-[93%] absolute top-0"
    >
      <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
    </h5>
    <div className="flex items-center justify-center">
    <img
        className="h-12"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646935/assets/64/93c255-87c8-4e2e-9429-cf709bf1b838/original/3.png"
        alt=""
      />
      <div className="text-right">
        <h2 className="text-lg font-medium">Sarthak</h2>
        <h4 className="text-xl font-semibold -mt-1 -mb-1">MP 04 AB 1234</h4>
        <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
      </div>
    </div>
    <div className="flex flex-col gap-2 justify-center items-center">
     
      <div className="w-full">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab,Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab,Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WaitingForDriver