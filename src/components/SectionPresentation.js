import React from "react";
import TitleSection from "./titlesection/TitleSection";
import PresentationCard from "./cards/PresentationCard";
import Card from "./cards/card";

export default function SectionPresentation({arcadePosts}) {
  return (
    <div id="" className="">
      <TitleSection
        title="Présentation"
        subtitle="Découvrez-en plus sur NeoArcade et nos produits dans cette présentation."
      />
      <PresentationCard />
      <div
        className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:py-24 md:gap-10 "
        id="sectionCard"
      >
        {arcadePosts.map((post) => (
          // Ternaire de si mon post slug est strictement égale à Mode("Mode" et le slug rentré sur contentful sur la 9e card qui donc l'id 8) alors en format tablet je le cache sinon en lg il sera block.
          <div
            key={post.sys.id}
            className={post.fields.slug === "Mode" ? "md:hidden lg:block" : ""}
          >
            <Card
              key={post.sys.id}
              title={post.fields.title}
              slug={post.fields.slug}
              extract={post.fields.extract}
              img={post.fields.featureImage.fields.file.url}
              createdAT={post.fields.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
