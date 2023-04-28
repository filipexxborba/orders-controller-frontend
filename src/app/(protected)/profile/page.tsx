"use client";
import React from "react";
import { User } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import UserHeader from "@/app/components/UserHeader";
import UserPersonalInformations from "@/app/components/UserPersonalInformations";
import UserPasswordChange from "@/app/components/UserPasswordChange";

const page = () => {
   return (
      <section className="flex flex-col">
         <PageHeader
            title="Minha conta"
            icon={<User size={24} className="text-primary" />}
         />
         <div className="flex flex-col gap-8 p-8 mx-6 mb-6 bg-white border rounded-2xl border-borders-neutral">
            <UserHeader />
            <UserPersonalInformations />
            <UserPasswordChange />
         </div>
      </section>
   );
};

export default page;
