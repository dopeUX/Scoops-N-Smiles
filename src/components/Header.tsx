import React, { useState, useRef, useEffect } from "react";
import NavbarDesktop from "./Navbar_desktop";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthPageState } from "../AppSlice";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import verifyToken from "../functions/verifyToken";

export default function Header() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const authCheck = useSelector((state: RootState) => {
    return state.appReducer.checkUserAuth;
  });

  useEffect(() => {
    mail();
  }, []);
  ///STYLES DEPENDING UPON USER IS LOGGED IN OR ISN'T------
  // const avatarRef:any = useRef();
  // const signInButtonRef:any= useRef();

  ///////////////
  function slideDownAuthPage() {
    dispatch(changeAuthPageState("animate-slideDown"));
  }

  async function mail() {
    if (checkIfUserLoggedIn()) {
      const response = await verifyToken(authCheck);
      setEmail(response);
    }
  }
  function checkIfUserLoggedIn(): boolean {
    if (authCheck === "not logged in") {
      return false;
    } else {
      ///DISPLAY PROFILE AVATAR ----------
      return true;
    }
  }

  return (
    <header className="w-full relative px-6 py-4 bg-[rgb(248,248,248)] lg:px-20">
      <div className="text-lg w-full h-fit flex justify-between relative">
        <h1 className="w-fit logo text-center">
          Scoops N<br />
          <span>Smiles</span>
        </h1>
        <NavbarDesktop />
        <div className="flex">
          <Link to="/cart">
            <img
              src="./assets/carticon.svg"
              alt=""
              className={`w-14 h-12 my-auto cursor-pointer ${
                checkIfUserLoggedIn() ? "flex" : "hidden"
              }`}
            />
          </Link>
          <Link to="/profile">
            <div className="w-fit h-fit cursor-pointer">
              <img
                src="./assets/gamer.png"
                alt=""
                className={`w-11 h-11 my-auto cursor-pointer ml-5
                 ${checkIfUserLoggedIn() ? "flex" : "hidden"}`}
              />
            </div>
          </Link>
          <button
            onClick={() => {
              slideDownAuthPage();
            }}
            className={`${
              checkIfUserLoggedIn() ? "hidden" : "block"
            } text-base font-semibold rounded-2xl px-8 py-0 text-[#ff4a60] border-2 border-[#ff4a60] hover:bg-[#ff4a60] hover:border-0 hover:text-white`}
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
