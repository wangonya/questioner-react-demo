import { SIGN_IN, SIGN_UP } from ".././actions/types";

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
  isSignedIn: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}
