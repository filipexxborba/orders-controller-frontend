import { FileArchive, X } from "lucide-react";
import React, { useState } from "react";

interface AttachmentItemProps {
   name: string;
   index: number;
   state: any;
   dispatch: Function;
}

const AttachmentItem = ({
   name,
   index,
   state,
   dispatch,
}: AttachmentItemProps) => {
   const [isDeleting, setIsDeleting] = useState<boolean>(false);

   const handleDeletePress = () => {
      if (isDeleting) {
         const temp = state;
         temp.splice(index, 1);
         dispatch([...temp]);
      }
   };
   return (
      <div
         className="flex flex-col items-center gap-1 "
         onMouseEnter={() => setIsDeleting(true)}
         onMouseLeave={() => setIsDeleting(false)}
         onClick={() => handleDeletePress()}
      >
         <div className="flex items-center justify-center w-32 transition-colors border cursor-pointer bg-gray-50 h-36 rounded-xl border-neutral hover:bg-red-200">
            {isDeleting ? (
               <X size={24} className="text-red-500" />
            ) : (
               <FileArchive size={24} className="text-gray-300" />
            )}
         </div>
         <h2 className="text-sm font-medium text-gray-800">{name}</h2>
      </div>
   );
};

export default AttachmentItem;
