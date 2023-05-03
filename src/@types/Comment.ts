import { UserType } from "./User";

export type Comment = {
   content: string;
   createdAt: Date;
   createUser: UserType;
};
