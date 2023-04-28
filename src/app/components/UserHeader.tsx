"use client";
import Image from "next/image";
import { useUserContext } from "../context/UserContext";
import RoleComponent from "./RoleComponent";
import { UserRole } from "@/@types/UserRole";

const UserHeader = () => {
   const { user } = useUserContext();
   return (
      <section className="flex items-center justify-between p-6 border rounded-2xl border-borders-neutral">
         <div className="flex items-start gap-4">
            <Image
               src={user?.imageUri || "/no-image-avatar.png"}
               alt="Imagem do usuário"
               width={80}
               height={80}
               className="rounded-full"
            />
            <div className="flex flex-col items-start gap-2">
               <h3 className="text-2xl font-medium text-gray-800">
                  {user?.name || "Usuário desconhecido"}
               </h3>
               <div className="flex items-center gap-2 ">
                  {user?.isActive || true ? (
                     <>
                        <div className="w-2 h-2 rounded-full bg-lime-500" />
                        <h3 className="text-sm text-gray-400">Ativo</h3>
                     </>
                  ) : (
                     <>
                        <div className="w-2 h-2 rounded-full bg-rose-500" />
                        <h3 className="text-sm text-gray-400">Desativado</h3>
                     </>
                  )}
               </div>
               <RoleComponent role={user ? user?.role : UserRole.USER} />
            </div>
         </div>
      </section>
   );
};

export default UserHeader;
