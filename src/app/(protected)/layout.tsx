"use client";
import AsideMenu from "../components/AsideMenu";
import { UserContextProvider } from "../context/UserContext";

export default function ProtectedRoutesLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="grid grid-cols-[100px_1fr] h-[100vh] bg-red-neutral">
         <AsideMenu />
         {children}
      </section>
   );
}
