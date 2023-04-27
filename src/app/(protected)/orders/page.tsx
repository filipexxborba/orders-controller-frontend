import PageHeader from "@/app/components/PageHeader";
import React from "react";
import { ShoppingCart } from "lucide-react";

const page = () => {
   return (
      <section className="flex flex-col items-start">
         <PageHeader
            title="Pedidos"
            icon={<ShoppingCart size={24} className="text-primary" />}
         />
      </section>
   );
};

export default page;
