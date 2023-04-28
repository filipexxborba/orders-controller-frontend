import { UserRole } from "@/@types/UserRole";

const RoleComponent = ({ role }: { role: UserRole }) => {
   if (role === UserRole.ADMIN)
      return (
         <p className="px-4 py-1 text-sm text-indigo-600 border border-indigo-300 rounded-2xl">
            Administrador
         </p>
      );
   else if (role === UserRole.MANAGER)
      return (
         <p className="px-4 py-1 text-sm border text-amber-600 border-amber-300 rounded-2xl">
            Gestor
         </p>
      );
   else
      return (
         <p className="px-4 py-1 text-sm text-gray-600 border border-gray-300 rounded-2xl">
            Usuário
         </p>
      );
};

export default RoleComponent;
