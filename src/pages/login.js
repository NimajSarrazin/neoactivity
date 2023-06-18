import { useSession } from "next-auth/react";
import LayoutALL from "@/components/layout/LayoutALL";
import Head from "next/head";
import Link from "next/link";
import LoginForm from "@/components/form/loginForm";

export default function Login() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <LayoutALL>
        <Head>
          <title>Login</title>
        </Head>
        <LoginForm/>
      </LayoutALL>
    );
  }
  if (session) {
    return (
      <div className="bg-slate-50 h-screen w-screen">
        <p className="bg-green-200 text-center py-10 text-xl">
          Félicitation vous venez de vous connecté
        </p>
        <div className="items-center text-center">
          <h2>Vous êtes connecté</h2>
          <p>Votre Nom: {session.user.name}</p>
          <p>Votre Email: {session.user.email}</p>
          <img
            className="mx-auto py-10"
            src={session.user.image}
            alt={session.user.image}
          />
          <div className="space-x-4">
            <Link href={"/dashbord"}>
              <button className="bg-slate-300 p-4 border shadow-lg">
                {" "}
                Tableau de bord
              </button>
            </Link>
            <Link href={"/"}>
              <button className="bg-slate-300 p-4 border shadow-lg">
                Déconnecté
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
