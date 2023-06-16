import Layout from "@/components/layout/Layout";
import HeroPage from "@/components/layout/heroPage";
import React from "react";

export default function shop() {
  return (
    <Layout>
      <div>
        <HeroPage
          title="Bout"
          otherTitle="iques"
          content="Une expérience de jeu arcade inégalée vous attend dans notre boutique."
        />
      </div>
    </Layout>
  );
}
