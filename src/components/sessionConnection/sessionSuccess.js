import React from "react";
import AdminNav from "../dashbord/AdminNav";
import { useSession } from "next-auth/react";


export default function SessionSuccess({ session }) {
  return (
    <div id="admin-overlay" className="min-h-screen text-white flex">
      <AdminNav />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-xl p-4">
        <div className="text-black">
          <svg
            className="bg-white"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="5em"
            width="5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"
            ></path>
          </svg>
          <p>Admin session</p>
        </div>
        <span className="uppercase text-black">Mon Prénom:</span>
        <span className="text-black"> Mon Email:</span>
        <button className="bg-black border p-4">
          Go to website
        </button>
      </div>
    </div>
  );
}
