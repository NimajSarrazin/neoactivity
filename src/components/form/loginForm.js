import Link from "next/link";
import AsideFormLogin from "./asideForm/asideFormLogin";

export default function LoginForm() {
  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <aside className="">
        <h1 className="text-gray-800 text-4xl font-bold py-4"> Se Connecter</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quae.
        </p>
      </aside>
      {/* form */}
      <AsideFormLogin/>
      <div className="text-cente text-gray-300">
        Vous n'avez de compte ?
        <Link href={"/register"}>
          <p className="text-indigo-500"> S'inscrire</p>
        </Link>
      </div>
    </section>
  );
}
