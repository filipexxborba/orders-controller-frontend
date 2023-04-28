"use client";
import { User } from "lucide-react";
import { useUserContext } from "../context/UserContext";

const UserPersonalInformations = () => {
   const { user } = useUserContext();
   return (
      <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
         <div className="flex items-start gap-2">
            <User size={14} className="mt-2" />
            <h2 className="mb-2 text-xl font-medium text-gray-800">
               Informações pessoais
            </h2>
         </div>
         <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">Nome</h3>
               <p>{user?.name || "Usuário desconhecido"}</p>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">Email</h3>
               <p>{user?.email || "test@example.com"}</p>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">
                  Centro de custo
               </h3>
               <p>{user?.costCenter || "Não informado"}</p>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">
                  Foto de perfil
               </h3>
               <p>https://media.licdn.com/dms/image/C4D03AQHuU-PHI8P5LQ...</p>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">Função</h3>
               <p>{user?.role || "Usuário"} </p>
            </div>
            <div className="flex flex-col gap-1">
               <h3 className="text-sm font-medium text-gray-400">
                  Última atualização de perfil
               </h3>
               <p>
                  {new Date(user?.updatedAt).toLocaleDateString("pt-br") ||
                     "Não informado"}
               </p>
            </div>
         </div>
      </section>
   );
};

export default UserPersonalInformations;
