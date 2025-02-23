import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthCheck = () => {
  
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  
  const navigate = useNavigate();

  useEffect(()=>{
    const checkAuth = async ()=> {
      const token = localStorage.getItem("token")

      if(!token){
        navigate("/")
        return
      }

      try {
        const response = await axios.post(`${backend_url}/api/auth/verify`, {token})
        if(response.status === 200){
          navigate("/shop")
          return
        }
      } catch (error) {
        console.log(error.message)
        navigate("/")
      }
    }
    checkAuth();  
  }, [])
  return null;
}

export default AuthCheck;