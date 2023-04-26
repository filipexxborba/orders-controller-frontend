import LoadingSpinner from "./LoadingSpinner";

type ActionButtonProps = {
   title: string;
   onClick?: Function;
   type?: "primary" | "secondary";
   disabled?: boolean;
   loadingState?: boolean;
};

const ActionButton = ({
   title,
   onClick,
   type = "primary",
   disabled = false,
   loadingState,
}: ActionButtonProps) => {
   return (
      <button
         onClick={(event) => {
            if (onClick) {
               event.preventDefault();
               onClick();
            }
         }}
         disabled={disabled || loadingState}
         className={`flex items-center justify-center rounded-md py-2 disabled:cursor-not-allowed w-full ${
            type === "primary"
               ? "bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark transition-colors ease-in-out"
               : "border border-primary text-primary hover:bg-primary hover:text-white transition-colors ease-in-out"
         }`}
      >
         {loadingState ? <LoadingSpinner /> : title}
      </button>
   );
};

export default ActionButton;
