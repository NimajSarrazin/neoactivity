import { useState } from "react";
import { dataNavLinks } from "@/data/dataNavLinks";
import { Button, Toast } from "@nextui-org/react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSignOut = () => {
    signOut();
    setShowSuccessPopup(false);
  };

  const handleSignInSuccess = () => {
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className={`${session ? "" : "bg-transparent"} bg-black text-white`}>
      <div className="container flex justify-between items-center py-4">
        <Link href="/">
          <a className="font-black text-2xl">
            Neo<span className="text-[#EBA24E]">Arcade</span>
          </a>
        </Link>
        <ul className="flex items-center space-x-5">
          {dataNavLinks.map(({ link, title, id }) => (
            <li key={id}>
              <Link href={link}>
                <a className="hover:text-[#ffb82a] hover:underline text-sm font-medium">
                  {title}
                </a>
              </Link>
            </li>
          ))}
          {session ? (
            <Button auto ghost onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Link href="/api/auth/signin">
              <a
                className="next-btn next-btn-ghost"
                onClick={handleSignInSuccess}
              >
                Sign In
              </a>
            </Link>
          )}
        </ul>
      </div>
      {showSuccessPopup && (
        <Toast
          duration={5000}
          onClose={closeSuccessPopup}
          autoHide
          filled
          status="success"
          text="Connexion réussie avec succès!"
          className="fixed bottom-4 right-4"
        />
      )}
    </div>
  );
}
