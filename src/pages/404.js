import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div classNameName="">
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#333]">
        <img src="/img/LOgo-SD.png" alt="" />
        <h1 className="text-4xl font-extrabold text-[#ff6a3d] tracking-widest">
          404
        </h1>
        <div className="bg-[#FFF] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-[#ff6a3d] text-xl">Page non trouvé</p>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#ff6a3d] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#111] border border-current">
              <Link href="/">Retour à l'acceuil</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
}
