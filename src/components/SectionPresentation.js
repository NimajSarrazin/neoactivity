import React from "react";
import TitleSection from "./titlesection/TitleSection";
import PresentationCard from "./cards/PresentationCard";

export default function SectionPresentation() {
  return (
    <div id="" className="">
      <TitleSection
        title="Présentation"
        subtitle="Découvrez-en plus sur NeoArcade et nos produits dans cette présentation."
      />
      <PresentationCard />
    </div>
  );
}
