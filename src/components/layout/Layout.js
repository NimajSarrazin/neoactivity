import React from "react";
import { useRouter } from "next/router";
import Navbar from "../header/Navbar";

export default function Layout({ children, session }) {
  return (
    <div>
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
}
