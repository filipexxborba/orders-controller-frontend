import Link from "next/link";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

interface AsideMenuItemProps {
   title: string;
   href: string;
   icon: React.ReactNode;
   isActive: boolean;
   dispatch: (arg0: string) => void;
}

const AsideMenuItem = ({
   title,
   href,
   icon,
   isActive,
   dispatch,
}: AsideMenuItemProps) => {
   return (
      <div
         data-tooltip-id={title}
         data-tooltip-content={title}
         className={`relative flex items-center justify-center w-full py-4 px-8`}
      >
         <Link
            href={href}
            className={`transition-colors ease-in-out  ${
               isActive ? "text-primary" : "text-gray-400"
            }`}
            onClick={() => dispatch(href)}
         >
            {icon}
            {isActive && (
               <span className="absolute top-0 left-0 w-1 h-full rounded-r-lg bg-primary"></span>
            )}
         </Link>
         <Tooltip id={title} style={{ background: "#085833" }} place="right" />
      </div>
   );
};

export default AsideMenuItem;
