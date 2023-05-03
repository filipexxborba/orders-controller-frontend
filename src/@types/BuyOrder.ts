import { Item } from "./Item";
import { UserType } from "./User";

export type BuyOrder = {
   isApproved: boolean;
   items: Item[];
   totalPrice: number;
   createUser: UserType;
   managerResponsible: UserType;
   updatedAt: Date;
   createdAt: Date;
   comments: Comment[];
   isActive: boolean;
   attachments: string[];
};
