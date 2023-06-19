import { HiFingerPrint, HiAtSymbol, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import {
  inputStyle,
  inputGroup,
  buttonStyle,
  buttonHover,
  buttonCustom,
} from "@/components/form/formStyle/dataStyleForm";
import { SvgGithub, SvgGoogle } from "../svg/svg";

export default function AsideForm() {
  const [show, setShow] = useState({ password: false, seepassword: false });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const { data: session, status } = useSession();

  // Je combine le useState avec le hook useEffect pour valider mes forms
  useEffect(() => {
    validateEmail();
    validatePassword();
    validateName();
  }, [email, password, confirmPassword, username]);

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailRegex.test(email));
  };

  const validatePassword = () => {
    setIsPasswordMatch(password === confirmPassword);
  };

  const validateName = () => {
    setIsNameValid(username.length <= 15);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérification finale avant l'envoi à la base de données
    if (!isValidEmail || !isPasswordMatch || !isNameValid) {
      // Afficher des messages d'erreur ou effectuer d'autres actions
      if (!isValidEmail) {
        console.log("L'adresse e-mail n'est pas valide.");
        // Afficher un message d'erreur pour l'adresse e-mail
      }
      if (!isPasswordMatch) {
        console.log("Les mots de passe ne correspondent pas.");
        // Afficher un message d'erreur pour la correspondance des mots de passe
      }
      if (!isNameValid) {
        console.log("Le nom ne doit pas dépasser 15 caractères.");
        // Afficher un message d'erreur pour la longueur du nom
      }
      return;
    }

    // Si toutes les validations sont passées avec succès, vous pouvez maintenant envoyer les données à la base de données
    const formData = {
      Username: username,
      email,
      password,
      seepassword: confirmPassword,
    };
    console.log(formData);

    // Envoi des données à votre page

    if (result.error) {
      // Gérer les erreurs d'authentification
      console.log(result.error);
    } else {
      // Authentification réussie, vous pouvez effectuer les actions nécessaires ici
      console.log("Authentification réussie !");
    }
  };

  if (status === "loading") {
    return <div>Chargement...</div>;
  }

  if (session) {
    return <div>Bienvenue, {session.user.name}!</div>;
  }

  return (
    <aside>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type="text"
            name="Username"
            placeholder="Nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="icon flex items-center px-4">
            <HiUser size={25} />
          </span>
        </div>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon flex items-center px-4">
            <HiAtSymbol size={25} />
          </span>
        </div>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type={`${show.password ? "text" : "password"}`}
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon flex items-center px-4 cursor-pointer">
            <HiFingerPrint
              size={25}
              onClick={() => setShow({ ...show, password: !show.password })}
            />
          </span>
        </div>
        <div className={`${inputGroup}`}>
          <input
            className={`${inputStyle}`}
            type={`${show.seepassword ? "text" : "password"}`}
            name="seepassword"
            placeholder="Comfirmer votre Mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="icon flex items-center px-4 cursor-pointer">
            <HiFingerPrint
              size={25}
              onClick={() =>
                setShow({ ...show, seepassword: !show.seepassword })
              }
            />
          </span>
        </div>
        {!isPasswordMatch && (
          <p className="text-red-500">
            Les mots de passe ne correspondent pas.
          </p>
        )}
        {/* button login */}
        <div className="input-button">
          <button className={`${buttonStyle} ${buttonHover}`} type="submit">
            S'inscrire
          </button>
        </div>
        <div className="input-button">
          <button
            className={`${buttonCustom}`}
            onClick={() => signIn("google")}
          >
            S'inscrire avec Google
            <SvgGoogle />
          </button>
        </div>
        <div className="input-button">
          <button
            className={`${buttonCustom}`}
            onClick={() => signIn("github")}
          >
            S'inscrire avec Github
            <SvgGithub />
          </button>
        </div>
      </form>
    </aside>
  );
}
