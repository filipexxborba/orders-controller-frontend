"use client";
import { HomeIcon, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import AsideMenuItem from "./AsideMenuItem";
import { useEffect, useState } from "react";
import UserAsideMenu from "./UserAsideMenu";

const AsideMenu = () => {
   const [currentPage, setCurrentPage] = useState<string>("/home");

   const routes = [
      {
         title: "Home",
         href: "/home",
         icon: <HomeIcon size={24} />,
      },
      {
         title: "Pedidos",
         href: "/orders",
         icon: <ShoppingCart size={24} />,
      },
      {
         title: "Perfil",
         href: "/profile",
         icon: <User size={24} />,
      },
   ];

   useEffect(() => {
      setCurrentPage(window.location.pathname);
      console.log(currentPage);
   }, []);

   return (
      <div className="relative flex flex-col items-center h-full gap-4 bg-white shadow-md">
         <div className="flex items-center justify-center w-full py-5">
            <Image
               src="/tecnomyl-logo-t-colored.png"
               alt="Logo"
               width={50}
               height={50}
            />
         </div>
         <nav className="flex flex-col w-full gap-4 mt-2">
            {routes.map((route) => (
               <AsideMenuItem
                  dispatch={setCurrentPage}
                  key={route.title}
                  href={route.href}
                  icon={route.icon}
                  title={route.title}
                  isActive={currentPage === route.href}
               />
            ))}
         </nav>

         <div className="absolute bottom-0 left-0 w-full py-4 border-t border-t-white/10">
            <UserAsideMenu />
         </div>
      </div>
   );
};

export default AsideMenu;
