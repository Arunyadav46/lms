import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';


const Dashboard = () => {


    //data get student
      const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/student")
      .then((response) => {
        console.log("Fetched Students:", response);
        setStudents(response.data); // update state
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  console.log(students)


    //date cousrse get cousre form k liye

    const [courses, setCourses] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3000/api/course")
    .then((res) => {
      console.log("Fetched courses:", res.data);
      setCourses(res.data);
       setCourses(prev => [...prev, res.data]);
    })
    .catch((err) => {
      console.error("Error fetching courses:", err);
    });
}, []);
console.log(courses)
  
    const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    roll: "",
    branch: "",
  });

  // Course form state
  const [courseData, setCourseData] = useState({
    cname: "",
    description: "",
    instructor: "",
  });

  // Handle change for student form
  const handleStudentChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  // Handle change for course form
  const handleCourseChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };
  



  // Student form submit
 const handleStudentSubmit = (e) => {
  e.preventDefault();
  console.log("Student Data:", studentData);

  axios.post("http://localhost:3000/api/student", studentData)
    .then((res) => {
      console.log("Student added successfully:", res.data);
      alert("Student added successfully")
       setStudentData({
          name: "",
          email: "",
          roll: "",
          branch: ""
        });
      // Optionally reset the form or show success message
    })
    .catch((err) => {
      console.error("Error adding student:", err);
      // Optionally show error message
    });
};

  // Course form submit
 const handleCourseSubmit = (e) => {
  e.preventDefault();

  axios.post("http://localhost:3000/api/course", courseData)
    .then((res) => {
      console.log("Course added:", res.data);
      toast.success("Course added successfully!")
      // alert("Course added successfully!");
      // Optionally reset form fields
      // Update course list instantly
     setCourses((prevCourses) => [...prevCourses, res.data.course]);

      setCourseData({ cname: "", description: "", instructor: "" });
     
    })
    .catch((err) => {
      console.error("Error:", err);
      toast.error("Something went wrong while adding the course")
      // alert("Something went wrong while adding the course");
    });
};



    // Delete course function
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/course/${id}`)
      .then((res) => {
        // alert("Course deleted");
        toast.success('Course deleted');
        // Update list after deletion
        setCourses(courses.filter(course => course._id !== id));
      })
      .catch((err) => {
        console.error("Delete error:", err);
        toast.err("Failed to delete")
        // alert("Failed to delete");
      });
  };

  //handleupdate the data

  const [isEditing, setIsEditing] = useState(false);
const [editingCourseId, setEditingCourseId] = useState(null);

const handleUpdateSubmit = (e) => {
  e.preventDefault();

  axios
    .put(`http://localhost:3000/api/course/${editingCourseId}`, courseData)
    .then((res) => {
      // alert("Course updated successfully!");
      toast.success("Course updated successfully!")
      // update the course in UI
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course._id === editingCourseId ? res.data.updatedCourse : course
        )
      );
      // reset
      setIsEditing(false);
      setEditingCourseId(null);
      setCourseData({ cname: "", description: "", instructor: "" });
    })
    .catch((err) => {
      console.error("Error updating course:", err);
      toast.error("Failed to update course.")
      // alert("Failed to update course.");
    });
};


  const handleUpdate = (course) => {
  setCourseData({
    cname: course.cname,
    description: course.description,
    instructor: course.instructor,
  });
  setIsEditing(true);
  setEditingCourseId(course._id);
};

  

  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          LMS Dashboard
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Student Management Section */}
          {/* <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Student Management
            </h2>

            <form className="space-y-3" onSubmit={handleStudentSubmit}>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleStudentChange}
                placeholder="Student Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleStudentChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="roll"
                value={studentData.roll}
                onChange={handleStudentChange}
                placeholder="Roll Number"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="branch"
                value={studentData.branch}
                onChange={handleStudentChange}
                placeholder="Branch"
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Student
              </button>
            </form>

            Dummy Students
           <div className="mt-6 space-y-2">
  {students.map((student, index) => (
    <div key={index} className="p-3 bg-gray-100 rounded flex justify-between items-center">
      <div>
        <p className="font-medium">{student.name}</p>
        <p className="text-sm">{student.email}</p>
        <p className="text-sm">{student.rollno} | {student.branch}</p>
      </div>
      <button  onClick={() => handleDeleteStudent(student._id)} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </div>
  ))}
</div>

          </div> */}

          {/* Course Management Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Course Management
            </h2>

          <form className="space-y-3" onSubmit={isEditing ? handleUpdateSubmit : handleCourseSubmit}>
              <input
                type="text"
                name="cname"
                value={courseData.cname}
                onChange={handleCourseChange}
                placeholder="Course Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="description"
                value={courseData.description}
                onChange={handleCourseChange}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="instructor"
                value={courseData.instructor}
                onChange={handleCourseChange}
                placeholder="Instructor"
                className="w-full p-2 border rounded"
              />
              <button
  type="submit"
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
  {isEditing ? "Update Course" : "Add Course"}
</button>

            </form>

            {/* Dummy Courses */}
             {Array.isArray(courses)  ? (
  <div className="overflow-x-auto mt-6">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="py-2 px-4 border-b">Course Name</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b">Instructor</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td className="py-2 px-4 border-b">{course.cname}</td>
            <td className="py-2 px-4 border-b">{course.description}</td>
            <td className="py-2 px-4 border-b italic">{course.instructor}</td>
            <td className="py-2 px-4 border-b space-x-2">
              <button
                onClick={() => handleUpdate(course)} // you can open a modal or form with course data
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(course._id)}
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
) : (
  <p className="mt-6 text-gray-500">No courses available.</p>
)}





          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
