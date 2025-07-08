import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';




function Registration() {

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
    branch:"",
    course:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // axios.post("http://localhost:3000/api/register", formData)
  //   .then((res) => {
  //     console.log("Registration successful:", res);
  //     toast.success("Registration successful!")
  //      // ✅ Empty the form fields
  //     setFormData({
  //       name: '',
  //       email: '',
  //       address: '',
  //       password: '',
  //       mobile: '',
  //       college: '',
  //       roll: '',
  //       fatherName: '',
  //       fatherMobile: '',
  //       branch:"",
  //       course:"",
  //       collegeName: '',
  //     });

  //     // alert("Registration successful!");
  //   })
  //   .catch((err) => {
  //     console.error("Registration failed:", err);
  //     toast.error("Something went wrong!")
  //     // alert("Something went wrong!");
  //   });
};


  const [courses, setCourses] = useState([]); // for dropdown

  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/course")
  //     .then((res) => setCourses(res.data))
  //     .catch((err) => {
  //       console.error("Failed to fetch courses:", err);
  //       toast.error("Failed to load courses");
  //     });
  // }, []);

  return (
    //   <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex justify-center items-center p-4">
    //   <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl">
    //     <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

    //     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Enter Name"
    //           className="input"
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Enter Email"
    //           className="input"
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Address</label>
    //         <input
    //           type="text"
    //           name="address"
    //           placeholder="Enter Address"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Password <span className="text-red-500">*</span></label>
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Create Password"
    //           className="input"
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Mobile Number</label>
    //         <input
    //           type="text"
    //           name="mobile"
    //           placeholder="Enter Mobile Number"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">College Name</label>
    //         <input
    //           type="text"
    //           name="college"
    //           placeholder="Enter College Name"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Roll Number</label>
    //         <input
    //           type="text"
    //           name="roll"
    //           placeholder="Enter Roll Number"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Father's Name</label>
    //         <input
    //           type="text"
    //           name="fatherName"
    //           placeholder="Enter Father's Name"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <div>
    //         <label className="block mb-1 font-medium text-gray-700">Father's Mobile Number</label>
    //         <input
    //           type="text"
    //           name="fatherMobile"
    //           placeholder="Enter Father's Mobile Number"
    //           className="input"
    //           onChange={handleChange}
    //         />
    //       </div>
    //     </form>

    //     <button
    //       onClick={handleSubmit}
    //       className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
    //     >
    //       Register
    //     </button>
    //   </div>
    // </div>
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex justify-center items-center p-4">
//   <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl">
//     <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

//     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

//       {/* ✅ New Field: Branch */}
//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Branch</label>
//         <input type="text" name="branch" value={formData.branch} placeholder="Enter Branch" className="input" onChange={handleChange} />
//       </div>

//       {/* ✅ New Field: Course */}
//       <div>
//         <label className="block mb-1 font-medium text-gray-700">Course</label>
//         <input type="text" name="course" value={formData.course} placeholder="Enter Course" className="input" onChange={handleChange} />
//       </div>

//       <div className="md:col-span-2">
//         <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition">
//           Register
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
<div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex justify-center items-center p-4">
  <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-4xl">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { label: "Name", name: "name", type: "text", required: true },
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Address", name: "address", type: "text" },
        { label: "Password", name: "password", type: "password", required: true },
        { label: "Mobile Number", name: "mobile", type: "text" },
        { label: "College Name", name: "collegeName", type: "text" },
        { label: "Roll Number", name: "rollNumber", type: "text" },
        { label: "Father's Name", name: "fatherName", type: "text" },
        { label: "Father's Mobile Number", name: "fatherMobile", type: "text" },
        { label: "Branch", name: "branch", type: "text" },
        // { label: "Course", name: "course", type: "text" },
      ].map(({ label, name, type, required }) => (
        <div key={name}>
          <label className="block mb-1 font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            placeholder={`Enter ${label}`}
            onChange={handleChange}
            required={required}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      ))}

        {/* Conditional Course Input */}
  {courses.length > 0 ? (
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Course <span className="text-red-500">*</span>
      </label>
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        <option value="">-- Select Course --</option>
        {courses.map((course) => (
          <option key={course._id} value={course.cname}>
            {course.cname}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div>
      <label className="block mb-1 font-medium text-gray-700">
        Course <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
        placeholder="Enter Course"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
    </div>
  )}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>


  )
}

export default Registration