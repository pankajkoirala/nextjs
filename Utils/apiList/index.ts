import { GET_DATA, POST_DATA } from "../axiosHelper";

export async function fetchUserList(data) {
  let fetchResponse = await POST_DATA("/user", data);
  return fetchResponse.data;
}
