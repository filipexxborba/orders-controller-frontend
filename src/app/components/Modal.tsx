import { Info, X } from "lucide-react";

interface ModalProps {
   headerIcon?: React.ReactNode;
   title: string;
   onClose: Function;
   children: React.ReactNode;
   onYesFunction: Function;
   isVisible: boolean;
   confirmButtonMessage?: string;
   cancelButtonMessage?: string;
}

const Modal = ({
   title,
   onClose,
   children,
   onYesFunction,
   headerIcon,
   isVisible,
   confirmButtonMessage,
   cancelButtonMessage,
}: ModalProps) => {
   const handleYesButton = () => {
      onYesFunction();
      onClose();
   };
   if (isVisible) {
      return (
         <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-950/50">
            <section className="bg-white shadow rounded-md min-w-[500px] flex flex-col p-8 pb-10 gap-10">
               <header className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     {headerIcon ?? (
                        <Info size={24} className="text-gray-700" />
                     )}
                     <h2 className="text-xl font-medium text-gray-700">
                        {title}
                     </h2>
                  </div>
                  <nav className="">
                     <button onClick={() => onClose()}>
                        <X size={24} className="text-gray-700" />
                     </button>
                  </nav>
               </header>
               {children}
               <nav className="flex items-center gap-4">
                  <button
                     className="flex items-center justify-center w-full py-2 transition-colors ease-in-out border rounded-md disabled:cursor-not-allowed border-primary text-primary hover:bg-primary hover:text-white"
                     onClick={() => onClose()}
                  >
                     {cancelButtonMessage ?? "Não, cancelar"}
                  </button>
                  <button
                     className="flex items-center justify-center w-full py-2 text-white transition-colors ease-in-out border rounded-md disabled:cursor-not-allowed bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark"
                     onClick={() => handleYesButton()}
                  >
                     {confirmButtonMessage ?? "Sim, continuar"}
                  </button>
               </nav>
            </section>
         </div>
      );
   } else return null;
};

export default Modal;
