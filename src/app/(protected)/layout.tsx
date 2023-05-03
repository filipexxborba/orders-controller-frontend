"use client";
import AsideMenu from "../components/AsideMenu";

export default function ProtectedRoutesLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="grid grid-cols-[1fr] min-h-[100vh] bg-neutral">
         <AsideMenu />
         <div className="ml-[100px]">{children}</div>
      </section>
   );
}
