import PageHeader from "@/app/components/PageHeader";
import { BarChart } from "lucide-react";

const page = () => {
   return (
      <section className="flex flex-col items-start">
         <PageHeader title="Overview" icon={<BarChart size={24} className="text-primary"/>} />
      </section>
   );
};

export default page;
