import React from "react";

export default function PresentationCard() {
  return (
    <div className="container">
      <div className="py-24">
        <div className="flex flex-row-reverse gap-10 justify-between">
          <img src="./img/accuiel-neo-480x267.jpg" alt="w-1/2" />
          <div>
            <h2 className="pb-4 font-bold text-lg">
              Neo Arcade : L'ultime destination pour les passionnés de rétro et
              de gaming moderne !
            </h2>
            <p className="text-[#151515c9]">
              Bienvenue dans l'univers captivant de Neo Arcade, le spécialiste
              incontesté des bornes d'arcade et du retrogaming ! Plongez dans la
              nostalgie des salles d'arcade d'antan, réinventée avec une touche
              de modernité et d'innovation. Profitez de l'excitation des bornes
              d'arcade chez vous grâce à Neo Arcade. Notre collection combine le
              charme intemporel des classiques de l'arcade avec des technologies
              de pointe, offrant une expérience de jeu inégalée. Des matériaux
              de qualité supérieure et une conception méticuleuse garantissent
              une durabilité exceptionnelle. Découvrez notre gamme variée de
              jeux rétro et modernes, adaptée à tous les goûts. Transformez
              votre espace de travail ou créez des moments uniques lors de vos
              événements spéciaux avec Neo Arcade. Faites vibrer votre cœur de
              joueur en commandant votre borne d'arcade dès aujourd'hui.
              Rejoignez la communauté des passionnés de retrogaming avec Neo
              Arcade, le choix évident pour les amoureux de jeux d'arcade !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
