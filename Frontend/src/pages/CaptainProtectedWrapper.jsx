import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyCaptain = async () => {
      if (!token) {
        // Redirect to login if token is missing
        navigate("/captain-login");
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 200) {
          // Set captain data and finish loading
          setCaptain(res.data.captain);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        // Remove token and redirect on error
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    };

    verifyCaptain();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
