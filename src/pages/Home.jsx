import React, {useState} from "react";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState({
    name: "",
    age: "",
  })

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, data)
      if(response.status === 201){
        alert("User created")
      }
        setData({
        name: "",
        email: "",
        password: "",
      })
    } catch (error) {
      if(error.status === 409){
        console.log("User already exists")
      }
    }
  }
  
  return (
    <>
      <h1 className="text-center text-2xl">Sample data test</h1>
      <div className="flex justify-center mt-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="border h-8 p-2 w-72 rounded" type="text" placeholder="Your Name" name="name" value={data.name} onChange={handleChange} />
          <input className="border p-2 h-8 w-72 rounded" type="email" placeholder="Your Email" name="email" value={data.email} onChange={handleChange} />
          <input className="border p-2 h-8 w-72 rounded" type="password" placeholder="Your Password" name="password" value={data.password} onChange={handleChange} />
          <input className="mx-auto w-24 px-4 py-2 text-white rounded bg-blue-500" type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default Home;