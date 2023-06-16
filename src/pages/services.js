import Layout from "@/components/layout/Layout";
import HeroPage from "@/components/layout/heroPage";
import React from "react";

export default function Service() {
  return (
    <Layout>
      <div>
        <HeroPage
          title="Ser"
          otherTitle="vices"
          content="Des services sur mesure pour des bornes d'arcade uniques"
        />
      </div>
    </Layout>
  );
}
