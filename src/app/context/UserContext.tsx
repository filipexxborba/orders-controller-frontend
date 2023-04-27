import { UserRole } from "@/@types/UserRole";
import { createContext, useContext, useState } from "react";

export type UserType = {
   name: string;
   email: string;
   password: string;
   role: UserRole;
   imageUri: string;
   createdAt: Date;
   updatedAt: Date;
   isActive: boolean;
   refreshToken: string;
   refreshTokenExpiresAt: Date;
};

export type UserContextType = {
   user: UserType;
   setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

interface IUserContextProvider {
   children: React.ReactElement | React.ReactElement[];
}

const UserContext = createContext<UserContextType>({} as UserContextType);
const UserContextProvider = ({ children }: IUserContextProvider) => {
   const [user, setUser] = useState<UserType>({} as UserType);
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
