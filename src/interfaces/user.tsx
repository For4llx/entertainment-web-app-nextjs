import { ICollection } from "./collection";

export interface IUser {
  id: number;
  email: string;
  password: string;
  avatar: string;
  collections: ICollection[];
}
