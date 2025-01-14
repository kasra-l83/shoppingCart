import { urls } from "./urls";
import { generateClient } from "./client";
import { IUser } from "../types/users.type";

type fetchUsersListByIds = (_: Array<number>) => Promise<Array<IUser>>;

export const fetchUsersListByIds: fetchUsersListByIds= async (ids) =>{
  const client= generateClient();
  const responses = await Promise.all
  (ids.map((id) =>{
      return client.get<IUser>(urls.users.byId(id));
    })
  )
  const data: IUser[]= []
  for (const el of responses) {
    data.push(el.data)
  }
  return data;
}