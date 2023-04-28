"use client";
import { CostCenter } from "@/@types/CostCenter";
import { UserRole } from "@/@types/UserRole";
import { createContext, useContext, useState } from "react";

export type UserType = {
   name: string;
   email: string;
   password: string;
   role: UserRole;
   costCenter: CostCenter;
   imageUri: string;
   createdAt: Date;
   updatedAt: Date;
   isActive: boolean;
   refreshToken: string;
   refreshTokenExpiresAt: Date;
};

export type UserContextType = {
   user: UserType | null;
   setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

interface IUserContextProvider {
   children: React.ReactElement | React.ReactElement[] | React.ReactNode;
}

const UserContext = createContext<UserContextType>({} as UserContextType);
const UserContextProvider = ({ children }: IUserContextProvider) => {
   const [user, setUser] = useState<UserType | null>({} as UserType);
   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

const useUserContext = () => {
   return useContext(UserContext);
};

export { UserContext, UserContextProvider, useUserContext };
