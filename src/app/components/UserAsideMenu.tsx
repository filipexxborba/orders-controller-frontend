import { LogOut, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const UserAsideMenu = () => {
   const [isShowingPopover, setIsShowingPopover] = useState<boolean>(false);
   return (
      <div className="relative">
         <div
            className="flex items-center justify-center"
            onClick={() => setIsShowingPopover(!isShowingPopover)}
         >
            <Image
               src="https://media.licdn.com/dms/image/C4D03AQHuU-PHI8P5LQ/profile-displayphoto-shrink_200_200/0/1567085496880?e=1687996800&v=beta&t=hYjAev7b6cKer5H9CpqIbWEIglwpwPFH-Hc6R1ZACwk"
               alt="teste"
               width={48}
               height={48}
               className="rounded-full hover:cursor-pointer"
            />
         </div>
         <nav
            // className={`${isShowingPopover ? "visible" : "invisible" } absolute left-12 -top-16 bg-white rounded-md shadow-md py-2 popover`}
            className={`${
               !isShowingPopover
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
            } absolute left-12 -top-[110px] bg-white rounded-md shadow-lg py-2 transition-all ease-in-out popover flex flex-col border border-borders-neutral/30`}
            onMouseLeave={() => setIsShowingPopover(false)}
         >
            <div className="flex items-center gap-2 px-4 py-2 font-normal cursor-pointer text-slate-500 hover:bg-gray-50">
               <User size={18} className="text-primary" />
               <h3 className="min-w-[10ch]">Meu perfil</h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 font-normal cursor-pointer text-slate-500 hover:bg-gray-50">
               <LogOut size={18} className="text-primary" />
               <h3>Sair</h3>
            </div>
         </nav>
      </div>
   );
};

export default UserAsideMenu;
