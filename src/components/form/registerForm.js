import Link from "next/link";
import AsideForm from "./asideForm/asideFormRegister";

export default function RegisterForm() {
  // On stock dans une variable un useState de password et seepassword pour quand je clique sur mon icon il me montre les informations
  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <aside className="">
        <h1 className="text-gray-800 text-4xl font-bold py-4">S'inscrire</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quae.
        </p>
      </aside>
      {/* form */}
      <AsideForm />
      {/* end form */}
      <div className="text-cente text-gray-300">
        <p>Vous avez un compte ?</p>
        <Link href={"/login"}>
          <p className="text-indigo-500"> Se connecter</p>
        </Link>
      </div>
    </section>
  );
}
