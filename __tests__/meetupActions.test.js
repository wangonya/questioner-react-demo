import { FETCH_MEETUPS } from ".././src/redux/actions/types";
import meetupReducer from ".././src/redux/reducers/meetupReducer";
import { storeFactory } from ".././src/testUtils";

describe("meetupActions dispatcher", () => {
  let store;
  const initialState = {};
  beforeEach(() => {
    store = storeFactory(initialState);
    store.clearActions();
  });
  test("state is updated correctly after dispatch", () => {
    // store.dispatch(meetupReducer((type = "FETCH_MEETUPS")));
    const newState = store.getState();
  });
});
