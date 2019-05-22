import axios from "axios";
import { SIGN_IN } from "./types";

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

export const signUp = userData => dispatch => {
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/signup", userData)
    .then(res => {
      if (res.status === 201) {
        sessionStorage.setItem("token", res.data.data[0].access_token);
        console.log("res status", res.status);
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
