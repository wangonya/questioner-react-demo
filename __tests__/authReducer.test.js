import { SIGN_IN } from ".././src/redux/actions/types";
import authReducer from ".././src/redux/reducers/authReducer";

describe("authReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = authReducer(undefined, {});
    expect(newState.isSignedIn).toBe(false);
  });
  test("state changes when SIGN_IN action is called", () => {
    const newState = authReducer(undefined, { type: SIGN_IN });
    expect(newState.isSignedIn).toBe(true);
  });
});
