import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://townsquare.media/site/95/files/2024/01/attachment-tsvetoslav-hristov-iJ-uantQb9I-unsplash.jpg)] h-screen w-full pt-8 flex justify-between flex-col bg-red-400">
        <img
          className="w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
          <Link to={"/login"} className="flex justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
