interface PageHeaderProps {
   title: string;
   icon: React.ReactNode;
}

const PageHeader = ({ title, icon }: PageHeaderProps) => {
   return (
      <header className="w-full h-[92px] flex flex-col justify-center">
         <div className="flex items-center gap-2 pl-6 ">
            {/* {icon} */}
            <h2 className="text-4xl font-medium text-gray-700">{title}</h2>
         </div>
      </header>
   );
};

export default PageHeader;
