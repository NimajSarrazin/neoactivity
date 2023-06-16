import Layout from "@/components/layout/Layout";
import HeroPage from "@/components/layout/heroPage";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <div>
        <HeroPage
          title="Con"
          otherTitle="tact"
          content="Votre satisfaction est notre priorité : Contactez-nous pour un service exceptionnel"
        />
      </div>
    </Layout>
  );
}
