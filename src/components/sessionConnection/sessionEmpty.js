import { signIn } from "next-auth/react";
import React from "react";

export default function SessionEmpty({ onNotConnect }) {
  return (
    <div className="bg-[#333]">
      <div className="container w-screen h-screen flex items-center gap-4">
        <div className="text-center w-full">
          <h2 className="text-white uppercase text-3xl mb-4">
            Veuillez vous connecter
          </h2>
          <button
            className="bg-white p-2 px-4 font-bold"
            onClick={() => signIn("google")}
          >
            Se connecter avec Google
          </button>
          <button
            className="bg-black text-white p-2 px-4 font-bold"
            onClick={() => signIn("github")}
          >
            Se connecter avec GitHub
          </button>
          <p
            className="text-indigo-400 hover:underline mt-4 cursor-pointer"
            onClick={onNotConnect}
          >
            Ne pas se connecter
          </p>
        </div>
      </div>
    </div>
  );
}
