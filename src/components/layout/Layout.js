import React from "react";
import Navbar from "../header/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
}
