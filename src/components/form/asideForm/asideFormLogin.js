import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  inputStyle,
  inputGroup,
  buttonStyle,
  buttonHover,
  buttonCustom,
} from "@/components/form/formStyle/dataStyleForm";

export default function AsideFormLogin() {
  const [show, setShow] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      // La connexion a échoué, afficher un message d'erreur

      console.log(result.error);
    } else {
      // La connexion a réussi, rediriger ou mettre à jour l'état de votre application
      console.log("Connexion réussie");
    }
  };
  return (
    <aside>
      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type="email"
            name="email"
            placeholder="Email"
          />
          <span className="flex items-center px-4">
            <HiAtSymbol size={25} />
          </span>
        </div>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
          />
          <span className="icon flex items-center px-4 cursor-pointer">
            <HiFingerPrint size={25} onClick={() => setShow(!show)} />
          </span>
        </div>
        {/* button login */}
        <div className="input-button">
          <button className={`${buttonStyle} ${buttonHover}`} type="submit">
            Se connecter
          </button>
        </div>
        <div className="input-button">
          <button
            className={`${buttonCustom}`}
            onClick={() => signIn("google")}
          >
            Se connecter avec Google
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
    c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
    c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
    C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
    c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
    c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="input-button">
          <button
            className={`${buttonCustom}`}
            onClick={() => signIn("github")}
          >
            Se connecter avec Github
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </button>
        </div>
      </form>
    </aside>
  );
}
