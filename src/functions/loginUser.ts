import { changeAuthPageState, changeUserAuthState } from "../AppSlice";
import axios from "axios";
import store from "../store";

export default async function loginUser(email: string, password: string) {
  //  const dispatch = useDispatch();
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:3000/api/login/", user)
      .then((res) => {
        console.log("success", res.data);
        if (res.data.user) {
          alert("login successful");     
          localStorage.setItem("userToken", res.data.token);
          store.dispatch(changeAuthPageState("animate-slideUp"))
        //   dispatch(changeAuthPageState("animate-slideUp"));
          store.dispatch(changeUserAuthState(res.data.token));
         } else if (res.data.user === false) {
          alert("No such user exists");
         } else if (res.data.status === "error logging in user") {
          alert("please enter the correct email and password");
         }
      })
      .catch((err) => {
        console.log(err.response);
      });
  }