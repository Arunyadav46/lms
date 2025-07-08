import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



function Login() {

   const navigate =  useNavigate()
  
   const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("http://localhost:3000/api/login", formData)
    //   .then((res) => {
    //     console.log("Login Success:", res.data);
    //     if(res.data === 'success'){
    //     toast.success("Login Successfully")
    //         // alert("Login Successfully")
    //         navigate("/dashboard")
    //     }
    //     else{
    //       toast.error("login failed")
    //         // alert("login failed")
    //     }
    //     // console.log(res)
    //     // setMessage(res.data.message); // "Login successful"
    //     // Optionally store user or token:
    //     // localStorage.setItem("user", JSON.stringify(res.data.user));
    //   })
    //   .catch((err) => {
    //     console.error("Login Error:", err)
    //   });
  };

  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <Link to="/dashboard"
          type="submit"
          className="px-10 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </form>
    </div>
  )
}

export default Login