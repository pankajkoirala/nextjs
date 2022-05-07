const defaultState = {
  fullName: null,
  address: null,
  mobileNo: null,
  email: null,
  paymentMethod: "ONLINE_PAYMENT",
};

const userInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER_INFO":
      return {
        ...state,
        fullName: action.payload.fullName,
        address: action.payload.address,
        mobileNo: action.payload.mobileNo,
        email: action.payload.email,
        paymentMethod: "ONLINE_PAYMENT",
      };
    case "DELETE_USER_INFO":
      return {
        ...state,
        fullName: null,
        address: null,
        mobileNo: null,
        email: null,
        paymentMethod: "ONLINE_PAYMENT",
      };

    default:
      return state;
  }
};

export default userInfoReducer;
