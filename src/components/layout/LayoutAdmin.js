import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SessionEmpty from "../sessionConnection/sessionEmpty";
import SessionSuccess from "../sessionConnection/sessionSuccess";

export default function LayoutAdmin({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <SessionEmpty />
      </div>
    );
  }
  if (session) {
    return (
      <div className="">
        <SessionSuccess session={session} />
      </div>
    );
  }

  return <div>
  </div>;
}
