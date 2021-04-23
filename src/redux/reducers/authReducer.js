const initialState = {
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER_REQUEST_START":
      state.loading = true;
      break;
    case "REGISTER_REQUEST_SUCCESS":
      state.loading = false;
      console.log("success!!!");
      break;
    case "REGISTER_REQUEST_FAIL":
      state.loading = false;
      // set the error messange
      break;
  }
  return { ...state };
};

export default authReducer;
