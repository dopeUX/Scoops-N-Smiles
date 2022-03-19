import axios from "axios";
import { changeAuthPageState, changeUserAuthState, changeIsLoading,changeLoadingState } from "../AppSlice";
import store from "../store";

export default async function registerUser(email: string, password: string) {
    store.dispatch(changeIsLoading(true));
    store.dispatch(changeLoadingState('fixed'));
    const user = {
      email: email,
      password: password,
    };

    await axios
      .post(process.env.REACT_APP_REPL_HOST+"/api/register/", user)
      .then((res) => {
        if(res.data.status==='user created'){
        console.log("success");
        alert("sign up successfull");
        localStorage.setItem("userToken", res.data.token);
        store.dispatch(changeAuthPageState("animate-slideUp"));
        store.dispatch(changeUserAuthState(res.data.token));
        //nav("/profile");
        window.location.href='/profile';
        }
        else if(res.data.status==='error creating user'){
          alert('error creating user');
        }
        else if(res.data.status==='email already exists'){
          alert('email already exists! try signing up with different email');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState('hidden'));
  }