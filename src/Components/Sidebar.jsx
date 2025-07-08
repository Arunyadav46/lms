import React from 'react'
import { Link } from "react-router-dom";
function Sidebar() {
  return (
       <aside className="w-[25%] h-screen bg-gray-800 text-white">
      <div className="p-4 border-b border-gray-700 flex items-center space-x-4">
        <img
          src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold">Welcome</h4>
          <p className="text-xs text-gray-300">Admin</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 px-2">
        <li>
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
          >
            <i className="fa fa-hospital-o mr-2"></i> Student managment
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/course"
            className="block px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <i className="fa fa-user-md mr-2"></i> Course managment
          </Link>
        </li>
        {/* <li>
          <Link
            to="/admin/dashboard/patlist"
            className="block px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <i className="fa fa-user mr-2"></i> Patient List
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/hoslist"
            className="block px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <i className="fa fa-hospital-o mr-2"></i> Hospital List
          </Link>
        </li>
        <li>
          <Link
            to="/admin/dashboard/lab"
            className="block px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <i className="fa fa-flask mr-2"></i> Laboratory List
          </Link>
        </li> */}
      </ul>
    </aside>
  )
}

export default Sidebar