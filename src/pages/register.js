import LayoutALL from "@/components/layout/LayoutALL";
import Head from "next/head";
import { useSession } from "next-auth/react";
import RegisterForm from "@/components/form/registerForm";

export default function register() {
  //La valeur du useState ne sera pas true ou false il faut lui donné des properties.
  const { data: session } = useSession();
  return (
    <LayoutALL>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm/>
    </LayoutALL>
  );
}
