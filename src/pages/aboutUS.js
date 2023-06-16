import Layout from "@/components/layout/Layout";
import HeroPage from "@/components/layout/heroPage";
import React from "react";

export default function AboutUs() {

  return (
    <Layout>
      <div>
        <HeroPage
          title="A pro"
          otherTitle="pos"
          content="Derrière chaque succès, il y a une équipe engagée."
        />
      </div>
    </Layout>
  );
}
