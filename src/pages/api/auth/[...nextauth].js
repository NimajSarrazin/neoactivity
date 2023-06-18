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
      // Les options de configuration pour les informations d'identification
      credentials: {
        // Configuration des champs d'entrée personnalisés
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Mot de passe",
          type: "password",
        },
      },
      async authorize(credentials, _req) {
        // Vérifiez les informations d'identification ici et renvoyez l'utilisateur
        // Si les informations d'identification sont valides, renvoyez l'utilisateur
        // Sinon, renvoyez null ou une erreur appropriée
        // Exemple de vérification d'un utilisateur dans une base de données MongoDB
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection("users").findOne({
          email: credentials.email,
        });

        if (user && user.password === credentials.password) {
          return user;
        }

        return null;
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
