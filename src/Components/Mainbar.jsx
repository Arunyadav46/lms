// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { FaTachometerAlt, FaUsers, FaSearch } from "react-icons/fa";
// import { Link } from 'react-router-dom';



// function Mainbar() {

//    const [users, setUsers] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:3000/api/register")
//     .then((res) => {
//       setUsers(res.data);
//     })
//     .catch((err) => {
//       console.error("Error fetching users:", err);
//     });
// }, []);
// console.log(users)

//        const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     password: '',
//     mobile: '',
//     college: '',
//     roll: '',
//     fatherName: '',
//     fatherMobile: '',
//     branch:"",
//     course:""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   axios.post("http://localhost:3000/api/register", formData)
//     .then((res) => {
//       console.log("Registration successful:", res);
//       toast.success("Registration successful!")
      
//        // ✅ Empty the form fields
//       setFormData({
//         name: '',
//         email: '',
//         address: '',
//         password: '',
//         mobile: '',
//         college: '',
//         roll: '',
//         fatherName: '',
//         fatherMobile: '',
//         branch:"",
//         course:""
//       });

//       // alert("Registration successful!");
//     })
//     .catch((err) => {
//       console.error("Registration failed:", err);
//       toast.error("Something went wrong!")
//       // alert("Something went wrong!");
//     });
// };

//  const handleDelete = async (id) => {
//   // const confirmDelete = window.confirm("Are you sure you want to delete?");
//   // if (!confirmDelete) return;

//   try {
//     await axios.delete(`http://localhost:3000/api/registration/${id}`);
//     toast.success("Deleted successfully")
//     // alert("Deleted successfully");

//     // Remove the deleted user from state to update the UI instantly
//     setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
//   } catch (error) {
//     console.error("Delete failed:", error);
//     toast.error("Failed to delete user")
//     // alert("Failed to delete user");
//   }
// };

// //handleupdate
// const [updateData, setUpdateData] = useState({
//   name: "",
//   email: "",
//   address: "",
//   password: "",
//   mobile: "",
//   college: "",
//   roll: "",
//   fatherName: "",
//   fatherMobile: "",
//   branch: "",
//   course: "",
// });
// const [editMode, setEditMode] = useState(false);

// const handleEditUser = (user) => {
//   console.log(user)
//   console.log(user._id)
//   setUpdateData(user);
//   setEditMode(true);
// };

// const handleUpdate = () => {
//   axios
//     .put(`http://localhost:3000/api/registration/${updateData._id}`, updateData)
//     .then((res) => {
//       console.log(res)
//       alert("User updated successfully!");

//       // Update the user in the users list
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === updateData._id ? res.data : user
//         )
//       );

//       // Reset form and exit edit mode
//       setUpdateData({
//         name: "",
//         email: "",
//         mobile: "",
//         address: "",
//         password: "",
//         college: "",
//         roll: "",
//         fatherName: "",
//         fatherMobile: "",
//         branch: "",
//         course: "",
//       });
//       setEditMode(false);
//     })
//     .catch((error) => {
//       alert("Failed to update user.");
//       console.error("Update error:", error);
//     });
// };






//   return (
//         <div className="min-h-screen w-[100%] bg-gradient-to-r from-blue-50 to-purple-100 px-8 overflow-y-auto">
//            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
//           LMS Dashboard
//         </h1>
//   <div className="bg-white rounded-xl shadow-xl p-10 w-[100%] ">
//     <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

//     {/* <form onSubmit={handleSubmit} className="grid  grid-cols-1 md:grid-cols-2 gap-6">
//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
//         <input type="text" name="name" value={formData.name} placeholder="Enter Name" className="input" onChange={handleChange} required />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
//         <input type="email" name="email" value={formData.email} placeholder="Enter Email" className="input" onChange={handleChange} required />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Address</label>
//         <input type="text" name="address" value={formData.address} placeholder="Enter Address" className="input" onChange={handleChange} />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
//         <input type="password" name="password" value={formData.password} placeholder="Create Password" className="input" onChange={handleChange} required />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Mobile Number</label>
//         <input type="text" name="mobile" value={formData.mobile} placeholder="Enter Mobile Number" className="input" onChange={handleChange} />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">College Name</label>
//         <input type="text" name="college" value={formData.college} placeholder="Enter College Name" className="input" onChange={handleChange} />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Roll Number</label>
//         <input type="text" name="roll" value={formData.roll} placeholder="Enter Roll Number" className="input" onChange={handleChange} />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Father's Name</label>
//         <input type="text" name="fatherName" value={formData.fatherName} placeholder="Enter Father's Name" className="input" onChange={handleChange} />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Father's Mobile Number</label>
//         <input type="text" name="fatherMobile" value={formData.fatherMobile} placeholder="Enter Father's Mobile Number" className="input" onChange={handleChange} />
//       </div>

//       ✅ New Field: Branch
//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Branch</label>
//         <input type="text" name="branch" value={formData.branch} placeholder="Enter Branch" className="input" onChange={handleChange} />
//       </div>

//       ✅ New Field: Course
//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Course</label>
//         <input type="text" name="course" value={formData.course} placeholder="Enter Course" className="input" onChange={handleChange} />
//       </div>

//       <div className="md:col-span-2">
//         <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition">
//           Register
//         </button>
//       </div>
//     </form> */}
//     <form onSubmit={editMode ? handleUpdate  : handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//   {[
//     { label: "Name", name: "name", required: true, type: "text", placeholder: "Enter Name" },
//     { label: "Email", name: "email", required: true, type: "email", placeholder: "Enter Email" },
//     { label: "Address", name: "address", type: "text", placeholder: "Enter Address" },
//     { label: "Password", name: "password", required: true, type: "password", placeholder: "Create Password" },
//     { label: "Mobile Number", name: "mobile", type: "text", placeholder: "Enter Mobile Number" },
//     { label: "College Name", name: "college", type: "text", placeholder: "Enter College Name" },
//     { label: "Roll Number", name: "roll", type: "text", placeholder: "Enter Roll Number" },
//     { label: "Father's Name", name: "fatherName", type: "text", placeholder: "Enter Father's Name" },
//     { label: "Father's Mobile Number", name: "fatherMobile", type: "text", placeholder: "Enter Father's Mobile Number" },
//     { label: "Branch", name: "branch", type: "text", placeholder: "Enter Branch" },
//     { label: "Course", name: "course", type: "text", placeholder: "Enter Course" }
//   ].map((field, i) => (
//     <div key={i}>
//       <label className="block mb-1 font-medium text-gray-700">
//         {field.label} {field.required && <span className="text-red-500">*</span>}
//       </label>
//       <input
//         type={field.type}
//         name={field.name}
//         value={formData[field.name]}
//         placeholder={field.placeholder}
//         onChange={handleChange}
//         required={field.required}
//         className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//       />
//     </div>
//   ))}

//   <div className="md:col-span-2">
//     <button
//       type="submit"
//       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
//     >
//       Register
//     </button>
//   </div>
// </form>

//     <div className="mt-10">
//   <h3 className="text-xl font-bold mb-4 text-gray-700">Registered Users</h3>
//   <table className="w-full border text-sm">
//     <thead>
//       <tr className="bg-gray-200">
//         <th className="border px-2 py-1">Name</th>
//         <th className="border px-2 py-1">Email</th>
//         <th className="border px-2 py-1">Mobile</th>
//         <th className="border px-2 py-1">Branch</th>
//         <th className="border px-2 py-1">Course</th>
//         <th className="border px-2 py-1">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map((user) => (
//         <tr key={user._id}>
//           <td className="border px-2 py-1">{user.name}</td>
//           <td className="border px-2 py-1">{user.email}</td>
//           <td className="border px-2 py-1">{user.mobile}</td>
//           <td className="border px-2 py-1">{user.branch}</td>
//           <td className="border px-2 py-1">{user.course}</td>
//           <td className="border px-2 py-1 space-x-2">
//             {/* <button onClick={() => handleEdit(user)} className="text-blue-600">Edit</button> */}
//             <button
//   onClick={() => handleEditUser(user)}
//   className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
// >
//   Edit
// </button>

//             <button onClick={() => handleDelete(user._id)} className="text-red-600 px-2 py-2 bg-red-300 ml-2 rounded-md">Delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//   </div>
//       </div>
//   )
// }

// export default Mainbar

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function Mainbar() {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    mobile: '',
    collegeName: '',
    rollNumber: '',
    fatherName: '',
    fatherMobile: '',
    branch: '',
    course: ''
  });

  // Fetch users on load
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users)

  const fetchUsers = () => {
    axios.get("http://localhost:3000/api/register")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/register", formData)
      .then((res) => {
        toast.success("Registration successful!");
        setFormData({
          name: '',
          email: '',
          address: '',
          password: '',
          mobile: '',
          collegeName: '',
           rollNumber: '',
          fatherName: '',
          fatherMobile: '',
          branch: '',
          course: ''
        });
        fetchUsers(); // Refresh list
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        toast.error("Something went wrong!");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/registration/${id}`)
      .then(() => {
        toast.success("Deleted successfully!");
        setUsers((prev) => prev.filter((user) => user._id !== id));
      })
      .catch((err) => {
        toast.error("Failed to delete user");
        console.error(err);
      });
  };

  const handleEditUser = (user) => {
    setFormData(user);
    setEditMode(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/registration/${formData._id}`, formData)
      .then((res) => {
        toast.success("User updated successfully!");
        setUsers((prev) =>
          prev.map((u) => (u._id === formData._id ? res.data : u))
        );
        setFormData({
          name: '',
          email: '',
          address: '',
          password: '',
          mobile: '',
          collegeName: '',
           rollNumber: '',
          fatherName: '',
          fatherMobile: '',
          branch: '',
          course: '',
          collegeName:"",


        });
        setEditMode(false);
      })
      .catch((err) => {
        toast.error("Update failed!");
        console.error(err);
      });
  };

  const [courseList, setCourseList] = useState([]);

  //courseList
  useEffect(() => {
  axios.get("http://localhost:3000/api/course")
    .then((res) => setCourseList(res.data))
    .catch((err) => console.log(err));
}, []);


  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-purple-100 px-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        LMS Dashboard
      </h1>

      <div className="bg-white rounded-xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {editMode ? "Update User" : "Register"}
        </h2>

        <form onSubmit={editMode ? handleUpdate : handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name", name: "name", required: true },
            { label: "Email", name: "email", required: true, type: "email" },
            { label: "Address", name: "address" },
            { label: "Password", name: "password", required: true, type: "password" },
            { label: "Mobile Number", name: "mobile" },
            { label: "College Name", name: "collegeName" },
            { label: "Roll Number", name: "rollNumber" },
            { label: "Father's Name", name: "fatherName" },
            { label: "Father's Mobile", name: "fatherMobile" },
            { label: "Branch", name: "branch" },
            // { label: "Course", name: "course" },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required={field.required}
                className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

            {/* Course field with conditional dropdown or text input */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">
      Course <span className="text-red-500">*</span>
    </label>

    {courseList.length > 0 ? (
      <select
        name="course"
        value={formData.course || ""}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Course</option>
        {courseList.map((course) => (
          <option key={course._id} value={course.cname}>
            {course.cname}
          </option>
        ))}
      </select>
    ) : (
      <input
        type="text"
        name="course"
        value={formData.course || ""}
        onChange={handleChange}
        placeholder="Enter Course"
        required
        className="w-full border border-gray-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      />
    )}
  </div>



          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
            >
              {editMode ? "Update User" : "Register"}
            </button>
          </div>
        </form>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Registered Users</h3>
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Mobile</th>
                <th className="border px-2 py-1">Branch</th>
                <th className="border px-2 py-1">Course</th>
                <th className="border px-2 py-1">Password</th>
                
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border px-2 py-1">{user.name}</td>
                  <td className="border px-2 py-1">{user.email}</td>
                  <td className="border px-2 py-1">{user.mobile}</td>
                  <td className="border px-2 py-1">{user.branch}</td>
                  <td className="border px-2 py-1">{user.course}</td>
                  <td className="border px-2 py-1">{user.password}</td>
                  
                  <td className="border px-2 py-1 space-x-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
