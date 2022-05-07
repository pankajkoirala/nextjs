export function addUserInfo(data) {
  const { fullName, address, mobileNo, email } = data || {};
  return {
    type: "ADD_USER_INFO",
    payload: {
      fullName,
      address,
      mobileNo,
      email,
    },
  };
}
export function deleteUserInfo() {
  return {
    type: "DELETE_USER_INFO",
  };
}
