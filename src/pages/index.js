import SectionPresentation from "@/components/SectionPresentation";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/hero";
import SessionEmpty from "@/components/sessionConnection/sessionEmpty";
import { createClient } from "contentful";
import { useSession } from "next-auth/react";


export default function Home({ arcadePosts }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <SessionEmpty/>
      </div>
    );
  }
  if (session) {
    return (
      <Layout>
        <Hero />
        <SectionPresentation />
      </Layout>
    );
  }
}

export async function getStaticProps() {
  // Je récupe mes logs et ma data
  const arcadeClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // ensuite je stock la data dans une variable data
  const arcadeData = await arcadeClient.getEntries({
    content_type: "neoArcade",
    order: "sys.createdAt",
    limit: 999,
  });
  // On envoie la data dans le props de la page
  return {
    props: {
      arcadePosts: arcadeData.items,
    },
  };
}
