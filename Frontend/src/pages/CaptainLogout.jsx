import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("token");
          setTimeout(() => {
            navigate("/captain-login");
          }, 0);
        }
      });
  }, []);
  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
