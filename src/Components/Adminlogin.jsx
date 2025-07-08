
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


function Adminlogin() {

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

  // axios.post("http://localhost:3000/api/adminlogin", formData)
  //   .then((res) => {
  //     console.log("Login Success:", res.data);

  //     // ✅ Backend se success check karo
  //     if (res.data.success === true && res.data.message === "Login successful") {
  //       toast.success("Login Successfully");
  //       navigate("/dashboard");
  //     } else {
  //       toast.error("Login Failed");  // In case message or success doesn't match
  //     }
  //   })
  //   .catch((err) => {
  //     console.error("Login Error:", err);

  //     // ✅ Handle 401 or other backend errors
  //     if (err.response && err.response.status === 401) {
  //       toast.error("Invalid credentials!");
  //     } else {
  //       toast.error("Something went wrong!");
  //     }
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
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </form>
    </div>
  )
}

export default Adminlogin