import { generateClient } from "./client";
import { urls } from "./urls";

export const fetchProductsList= async () =>{
  const client= generateClient();
  const url=  urls.products.list;
  const response= await client.get(url)
  return response.data;
}