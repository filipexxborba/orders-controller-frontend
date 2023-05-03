"use client";
import { UserType } from "@/@types/User";
import { createContext, useContext, useState } from "react";

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
