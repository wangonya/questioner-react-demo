import { SIGN_IN } from ".././actions/types";

const initialState = {
  firstName: "",
  lastName: "",
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
