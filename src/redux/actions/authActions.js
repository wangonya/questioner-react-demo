import axios from "axios";
import { SIGN_IN, SIGN_UP } from "./types";

export const signIn = userData => dispatch => {
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/login", userData)
    .then(res => {
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.data[0].access_token);
        dispatch({
          type: SIGN_IN
        });
      }
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
      setTimeout(() => {
        this.setState({
          error: null
        });
      }, 3700);
    });
};
