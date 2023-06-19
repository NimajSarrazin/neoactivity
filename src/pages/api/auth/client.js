import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Remplacez cette URL par l'URL de votre base de données MongoDB
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connexion à MongoDB établie");
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB", error);
  }
}

connect();

export default client;
