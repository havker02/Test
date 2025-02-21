import { useState } from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login =()=>{
  
  const navigate = useNavigate();
  
  const backend_url = import.meta.env.VITE_BACKEND_URL

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backend_url}/api/auth/login`, formData);

      console.log(response)

    if (response.status === 200){
        localStorage.setItem("token", response.data.token)
      alert("login success")
      setFormData({
        email: "",
        password: "",
      })
      navigate("/contact")
      }
      
    } catch (error) {
      console.log(error.messags);
    }
  }
  
  return(
    <div className="flex justify-center items-center mt-24">
      <div className="w-82 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form action={`${backend_url}/api/auth/login`} method="post" onSubmit={handleSubmit} className="space-y-6">
    <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
      Sign in to your account
    </h5>
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="email">
        Your email
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        id="email"
        name="email"
        placeholder="name@email.com"
        required
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="password">
        Your password
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        id="password"
        name="password"
        placeholder="••••••••"
        required
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>
    <div className="flex items-start">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            defaultValue=""
            id="remember"
            required
            type="checkbox"
          />
        </div>
        <label
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="remember">
          Remember me
        </label>
      </div>
      {/*
      <a
        className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        href="#">
        Lost Password?
      </a>
      */}
    </div>
    <button
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="submit">
      Login to your account
    </button>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?{" "}
      <a className="text-blue-700 hover:underline dark:text-blue-500" href="/signup">
        Create account
      </a>
    </div>
  </form>
</div>   
</div>
  )
}

export default Login;