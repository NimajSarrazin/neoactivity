import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export default function NextAuth() {

  provider: [
    CredentialsProvider({
        name:"Credentials",

        credentials: {
            username: { label: "Username", type:"text", placeholder: "Entre votre identifiant"},
            password: { label: "Password", type:"password"},
        },

        async authorize(credentials, req) {
            // Ajoute une logique pour voir si l'user 


            const res = await fetch("http://localhost:3000/auth/login",{
                method: "POST",
                header:{
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials.username,
                    password: credentials.password,
                }),
            });
            const user = await res.json();

            if(user){
                return user;
            } else {
                return null;
            }
        }
    })
  ]
}
