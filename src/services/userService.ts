import { constants } from "@/constants";
import { cookies } from "next/headers";

export class UserService {
   public getAll: Function;

   constructor() {
      this.getAll = async () => {
         const cookieStore = cookies();
         const authorization = cookieStore.get("jwt-orders-auth-token")?.value;
         console.log("TOKEN: ", authorization);
         try {
            const response = await fetch(`${constants.EXTERNAL_API}/user`, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${authorization}`,
               },
            });
            return await response.json();
         } catch (error: any) {
            return error;
         }
      };
   }
}
