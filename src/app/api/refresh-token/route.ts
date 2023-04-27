import { AuthService } from "@/services/authService";
import { NextRequest, NextResponse } from "next/server";

const authService = new AuthService();

export async function POST(request: NextRequest) {
   const { token, refresh_token } = await request.json();
   const data = await authService.refreshToken(token, refresh_token);

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
