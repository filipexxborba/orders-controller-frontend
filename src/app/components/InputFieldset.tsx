import { Eye, EyeOff } from "lucide-react";
import { HTMLInputTypeAttribute, useState } from "react";

type InputFieldsetProps = {
   title: string;
   placeholder?: string;
   id: string;
   state: any;
   dispatch: React.Dispatch<React.SetStateAction<any>>;
   toggleVisibility?: boolean;
   type?: HTMLInputTypeAttribute;
};

const InputFieldset = ({
   title,
   placeholder,
   id,
   state,
   dispatch,
   toggleVisibility,
   type = "text",
}: InputFieldsetProps) => {
   const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

   const VisibilityComponent = () => {
      return (
         <div
            className="absolute right-0 flex items-center justify-center h-[90%] pl-1 pr-2 mr-[2px] -translate-y-1/2 text-borders-neutral top-1/2 bg-white cursor-pointer"
            onClick={() => setIsShowingPassword(!isShowingPassword)}
         >
            {isShowingPassword ? <Eye /> : <EyeOff />}
         </div>
      );
   };

   // This function will be called every time the value of the input changes
   const handleInputChange = (newValue: any) => {
      dispatch({ ...state, [id]: newValue });
   };

   return (
      <fieldset className="flex flex-col items-start gap-1">
         <label className="text-sm font-medium text-gray-800" htmlFor={id}>
            {title}
         </label>
         <div className="relative w-full">
            <input
               className="w-full px-4 py-2 text-gray-500 border rounded-md border-borders-neutral placeholder:text-borders-neutral focus:border-primary focus:outline-none"
               type={
                  toggleVisibility
                     ? isShowingPassword
                        ? type
                        : "password"
                     : type
               }
               placeholder={placeholder ?? ""}
               id={id}
               value={state[id] ?? ""}
               onChange={(event) => handleInputChange(event.target.value)}
            />
            {toggleVisibility && <VisibilityComponent />}
         </div>
      </fieldset>
   );
};

export default InputFieldset;
