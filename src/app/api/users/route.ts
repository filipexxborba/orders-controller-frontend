import { UserService } from "@/services/userService";
import { NextRequest, NextResponse } from "next/server";

const userService = new UserService();

export async function GET(request: NextRequest) {
   const data = await userService.getAll();
   return NextResponse.json({ data });
}
