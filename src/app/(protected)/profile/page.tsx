"use client";
import React from "react";
import { Key, Lock, User } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import Image from "next/image";
import ActionButton from "@/app/components/ActionButton";

const page = () => {
   return (
      <section className="flex flex-col">
         <PageHeader
            title="Minha conta"
            icon={<User size={24} className="text-primary" />}
         />
         <div className="flex flex-col gap-8 p-8 mx-6 mb-6 bg-white border rounded-2xl border-borders-neutral">
            {/* <h2 className="text-xl font-medium text-gray-800">Meu perfil</h2> */}
            <section className="flex items-center justify-between p-6 border rounded-2xl border-borders-neutral">
               <div className="flex items-start gap-4">
                  <Image
                     src="https://media.licdn.com/dms/image/C4D03AQHuU-PHI8P5LQ/profile-displayphoto-shrink_200_200/0/1567085496880?e=1687996800&v=beta&t=hYjAev7b6cKer5H9CpqIbWEIglwpwPFH-Hc6R1ZACwk"
                     alt="teste"
                     width={80}
                     height={80}
                     className="rounded-full"
                  />
                  <div className="flex flex-col items-start gap-2">
                     <h3 className="text-2xl font-medium text-gray-800">
                        Filipe Borba
                     </h3>
                     <div className="flex items-center gap-2 ">
                        <div className="w-2 h-2 rounded-full bg-lime-500" />
                        <h3 className="text-sm text-gray-400">Ativo</h3>
                     </div>
                     <p className="px-4 py-1 text-sm text-gray-600 border border-gray-300 rounded-2xl">
                        Usuário
                     </p>
                  </div>
               </div>
            </section>
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
                     <p>Filipe Borba</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Email
                     </h3>
                     <p>filipe.borba@tecnomyl.com</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Centro de custo
                     </h3>
                     <p>T.I.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Foto de perfil
                     </h3>
                     <p>
                        https://media.licdn.com/dms/image/C4D03AQHuU-PHI8P5LQ...
                     </p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Função
                     </h3>
                     <p>Usuário</p>
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Última atualização de perfil
                     </h3>
                     <p>01/01/2023</p>
                  </div>
               </div>
            </section>
            <section className="flex flex-col items-start gap-6 p-6 border rounded-2xl border-borders-neutral">
               <div className="flex items-start gap-2">
                  <Lock size={14} className="mt-2" />
                  <h2 className="mb-2 text-xl font-medium text-gray-800">
                     Informações de acesso
                  </h2>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Nova senha
                     </h3>
                     <input
                        type="password"
                        className="w-full px-4 py-2 mt-2 text-gray-500 border rounded-md border-borders-neutral placeholder:text-borders-neutral focus:border-primary focus:outline-none"
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-sm font-medium text-gray-400">
                        Repita a senha
                     </h3>
                     <input
                        type="password"
                        className="w-full px-4 py-2 mt-2 text-gray-500 border rounded-md border-borders-neutral placeholder:text-borders-neutral focus:border-primary focus:outline-none"
                     />
                  </div>
               </div>
            </section>
         </div>
      </section>
   );
};

export default page;
