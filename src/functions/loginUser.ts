import { changeAuthPageState, changeUserAuthState, changeIsLoading,changeLoadingState } from "../AppSlice";
import axios from "axios";
import store from "../store";

export default async function loginUser(email: string, password: string) {
    store.dispatch(changeIsLoading(true));
    store.dispatch(changeLoadingState('fixed'));
  //  const dispatch = useDispatch();
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post(process.env.REACT_APP_REPL_HOST+"/api/login/", user)
      .then((res) => {
        console.log("success", res.data);
        if (res.data.user) {
          alert("login successful");     
          localStorage.setItem("userToken", res.data.token);
          store.dispatch(changeAuthPageState("animate-slideUp"))
        //   dispatch(changeAuthPageState("animate-slideUp"));
          store.dispatch(changeUserAuthState(res.data.token));
          window.location.reload()
         } else if (res.data.user === false) {
          alert("No such user exists");
         } else if (res.data.status === "error logging in user") {
          alert("please enter the correct email and password");
         }
      })
      .catch((err) => {
        console.log(err.response);
      });

      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState('hidden'));
  }