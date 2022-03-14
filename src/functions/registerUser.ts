import axios from "axios";
import { changeAuthPageState, changeUserAuthState } from "../AppSlice";
import store from "../store";

export default async function registerUser(email: string, password: string) {

    const user = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:3000/register/", user)
      .then((res) => {
        console.log("success");
        alert("sign up successfull");
        localStorage.setItem("userToken", res.data.token);
        store.dispatch(changeAuthPageState("animate-slideUp"));
        store.dispatch(changeUserAuthState(res.data.token));
        //nav("/profile");
        window.location.href='/profile';
      })
      .catch((err) => {
        console.log(err.response);
      });
  }