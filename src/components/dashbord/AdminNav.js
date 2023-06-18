import dataNavAdmin from "@/data/dataNavAdmin";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function AdminNav() {
  const inactiveLink = "flex gap-1";
  const activeLink = inactiveLink + "flex gap-2 bg-white text-red";
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="container">
      <div className="flex h-screen overflow-hidden">
        <aside className="aboslute left-0 top-0 z-9999 text-white p-4 no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
            <span className="text-4xl mb-6">NeoArcade </span>
          </div>
          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear bg-black">
            <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
              <div>
                <h3 class="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  MENU
                </h3>
                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4 active">
                  <Link href={"/"} legacyBehavior>
                    <span> Tableau de bord</span>
                  </Link>
                </li>
                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4 active">
                  <Link href={"/"} legacyBehavior>
                    <span> Boutique</span>
                  </Link>
                </li>
                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4 active">
                  <Link href={"/"} legacyBehavior>
                    <span> Profil</span>
                  </Link>
                </li>
                <li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 bg-graydark dark:bg-meta-4 active">
                  <Link href={"/"} legacyBehavior>
                    <span> Paramètre</span>
                  </Link>
                </li>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
