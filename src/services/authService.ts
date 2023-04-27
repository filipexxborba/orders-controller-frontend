import { constants } from "@/constants";

export class AuthService {
   public login: Function;
   public refreshToken: Function;

   constructor() {
      this.login = async (email: string, password: string) => {
         try {
            const apiResponse = await fetch(
               `${constants.EXTERNAL_API}/auth/login`,
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email: email, password: password }),
               }
            );
            const data = await apiResponse.json();

            return data;
         } catch (error: any) {
            return error;
         }
      };

      this.refreshToken = async (token: string, refreshToken: string) => {
         try {
            const apiResponse = await fetch(
               `${constants.EXTERNAL_API}/auth/refresh-token`,
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                     access_token: token,
                     refresh_token: refreshToken,
                  }),
               }
            );
            const data = await apiResponse.json();
            return data;
         } catch (error: any) {
            return error;
         }
      };
   }
}
