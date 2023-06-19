import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...ajoutez d'autres fournisseurs ici
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // Configuration du fournisseur de connexion par e-mail
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Mot de passe", type: "password" },
      },
      authorize: async (credentials) => {
        // Vérification de l'e-mail avant la connexion
        const { email, password } = credentials;

        // Votre logique de vérification de l'e-mail ici
        // Vous pouvez utiliser MongoDBAdapter pour interroger votre base de données MongoDB

        // Si l'e-mail est vérifié avec succès, vous pouvez renvoyer un objet utilisateur
        const user = { email: "user@example.com", name: "John Doe" };
        return Promise.resolve(user);

        // Si l'e-mail n'est pas vérifié, vous pouvez renvoyer null ou une erreur
        // return Promise.resolve(null);
        // return Promise.reject(new Error("Erreur de vérification de l'e-mail"));
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
