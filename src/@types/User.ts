import { CostCenter } from "./CostCenter";
import { UserRole } from "./UserRole";

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
