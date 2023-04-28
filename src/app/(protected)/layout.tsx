"use client";
import AsideMenu from "../components/AsideMenu";

export default function ProtectedRoutesLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="grid grid-cols-[100px_1fr] h-[100vh] bg-neutral">
         <AsideMenu />
         {children}
      </section>
   );
}
