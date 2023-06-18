import LayoutALL from "@/components/layout/LayoutALL";
import Head from "next/head";
import Link from "next/link";
import { HiFingerPrint, HiAtSymbol, HiUser } from "react-icons/hi";
import { useState } from "react";
import {
  inputStyle,
  inputGroup,
  buttonStyle,
  buttonHover,
  buttonCustom,
} from "@/components/form/formStyle/dataStyleForm";
import { signIn, useSession } from "next-auth/react";
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
