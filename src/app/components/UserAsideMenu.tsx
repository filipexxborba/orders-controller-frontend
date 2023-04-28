"use client";
import { LogOut, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
const UserAsideMenu = () => {
   const [isShowingPopover, setIsShowingPopover] = useState<boolean>(false);
   const { user, setUser } = useUserContext();
   const router = useRouter();

   const handleLogoutButton = async () => {
      const response = await fetch("/api/auth", { method: "DELETE" });
      const { data } = await response.json();
      setUser(null);
      router.push("/");
   };
   return (
      <div className="relative">
         <div
            className="flex items-center justify-center"
            onClick={() => setIsShowingPopover(!isShowingPopover)}
         >
            <Image
               src={user?.imageUri || "/no-image-avatar.png"}
               alt="teste"
               width={48}
               height={48}
               className="rounded-full hover:cursor-pointer"
            />
         </div>
         <nav
            className={`${
               !isShowingPopover
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
            } absolute left-12 -top-[110px] bg-white rounded-md shadow-lg py-2 transition-all ease-in-out popover flex flex-col border border-borders-neutral/30 z-50`}
            onMouseLeave={() => setIsShowingPopover(false)}
         >
            <div
               className="flex items-center gap-2 px-4 py-2 font-normal cursor-pointer text-slate-500 hover:bg-gray-50"
               onClick={() => router.push("/profile")}
            >
               <User size={18} className="text-primary" />
               <h3 className="min-w-[10ch]">Meu perfil</h3>
            </div>
            <div
               className="flex items-center gap-2 px-4 py-2 font-normal cursor-pointer text-slate-500 hover:bg-gray-50"
               onClick={() => handleLogoutButton()}
            >
               <LogOut size={18} className="text-primary" />
               <h3>Sair</h3>
            </div>
         </nav>
      </div>
   );
};

export default UserAsideMenu;
