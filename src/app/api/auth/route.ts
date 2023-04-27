import { AuthService } from "@/services/authService";
import { NextRequest, NextResponse } from "next/server";

const authService = new AuthService();

export async function POST(request: NextRequest) {
   const { email, password } = await request.json();
   const data = await authService.login(email, password);

   if (data.access_token) {
      return NextResponse.json(
         { data },
         {
            headers: {
               "Set-Cookie": `jwt-orders-auth-token=${data.access_token}; Path=/; SameSite=Strict; jwt-orders-auth-refresh-token=${data.refresh_token}; Path=/; SameSite=Strict;`,
            },
         }
      );
   } else return NextResponse.json(data);
}
