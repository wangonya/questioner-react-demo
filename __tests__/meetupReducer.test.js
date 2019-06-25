import { FETCH_MEETUPS } from ".././src/redux/actions/types";
import meetupReducer from ".././src/redux/reducers/meetupReducer";

describe("meetupReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = meetupReducer(undefined, {});
    expect(newState).toEqual({ error: null, loading: true, meetups: [] });
  });
  test("state changes when FETCH_MEETUPS action is called", () => {
    const newState = meetupReducer(undefined, { type: FETCH_MEETUPS });
    expect(newState.loading).toBe(false);
  });
});
