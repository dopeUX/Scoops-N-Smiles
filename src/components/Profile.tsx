import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { changeUserAuthState } from "../AppSlice";
import getLoggeInUserDetails from "../functions/getLoggeInUserDetails";
import updateUserDetails from "../functions/updateUserDetails";
import { RootState } from "../store";

export default function ProfilePage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(0);
  const [user, setUser] = useState<any>({ undefined });
  const editRef: any = useRef();
  const [contentEditable, setContentEditable] = useState(false);
  const dispatch = useDispatch();
  const authCheck = useSelector((state: RootState) => {
    return state.appReducer.checkUserAuth;
  });

  useEffect(() => {
    try {
      if (authCheck !== "not logged in") {
        getLoggeInUserDetails(authCheck).then(async (res: any) => {
          setUser(res);
        });
      } else {
        nav("/");
      }
    } catch (err) {}
  }, []);

  useEffect(() => {
    if (user !== {}) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAddress(user.address);
      setPhone(user.phone);
    }
    // console.log(user);
  }, [user]);

  function logOut() {
    localStorage.removeItem("userToken");
    dispatch(changeUserAuthState("not logged in"));
    window.location.reload();
  }
  //console.log(user);
  return (
    <div className="w-fit mx-auto my-8">
      <div className="w-fit flex flex-row">
        <img
          src="/assets/gamer.png"
          alt=""
          className="w-16 h-16 inline-block"
        />
        <h1 className="text-[2.3vw] ml-7 font-bold inline-block w-fit cs:text-[3.6vw] cs:mr-16">
          {email}
        </h1>
        <img
          src="/assets/edit.png"
          alt=""
          className="w-16 ml-5 cursor-pointer"
          onClick={() => {
            setContentEditable(true);
            editRef.current.focus();
          }}
        />
      </div>
      <section className="mt-10 flex flex-col cs:w-full">
        <div className="flex flex-row w-fit cs:flex-col cs:w-full">
          {/* First Name */}
          <div className="w-fit h-fit relative cs:w-full">
            <h2 className="text-xl text-[#afadad] font-semibold">First Name</h2>
            <input
              ref={editRef}
              type="text"
              //   autoFocus={contentEditable === true && true}
              className="w-64 mt-5 py-3 px-4 bg-[#e9e9e9] rounded-xl border-2 font-semibold focus:outline-none focus:border-[#ff4a60] focus:ring-1 focus:ring-[#ff4a60] cs:w-full"
              value={firstName || ""}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              readOnly={contentEditable === false ? true : false}
            />
          </div>

          {/* Last Name */}
          <div className="w-fit h-fit relative ml-24 cs:w-full cs:ml-0 cs:mt-8">
            <h2 className="text-xl text-[#afadad] font-semibold">Last Name</h2>
            <input
              type="text"
              className="w-64 mt-5 py-3 px-4 bg-[#e9e9e9] rounded-xl border-2 font-semibold focus:outline-none focus:border-[#ff4a60] focus:ring-1 focus:ring-[#ff4a60] cs:w-full"
              value={lastName || ""}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              readOnly={contentEditable === false ? true : false}
            />
          </div>
        </div>

        {/* Address */}
        <div className="w-full h-fit relative mt-10 block">
          <h2 className="text-xl text-[#afadad] font-semibold">Address</h2>
          <input
            type="text"
            className="w-full mt-5 py-3 px-4 bg-[#e9e9e9] border-2 focus:outline-none focus:border-[#ff4a60] focus:ring-1 focus:ring-[#ff4a60] rounded-xl font-semibold"
            value={address || ""}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            readOnly={contentEditable === false ? true : false}
          />
        </div>

        {/* Phone */}
        <div className="flex w-full justify-between mt-10 cs:flex-col">
          <div className="w-fit h-fit relative block cs:w-full">
            <h2 className="text-xl text-[#afadad] font-semibold">Phone</h2>
            <input
              type="tel"
              className="w-64 mt-5 py-3 px-4 bg-[#e9e9e9] rounded-xl border-2 font-semibold focus:outline-none focus:border-[#ff4a60] focus:ring-1 focus:ring-[#ff4a60] cs:w-full"
              value={phone || 0}
              onChange={(e) => {
                setPhone(Number(e.target.value));
              }}
              readOnly={contentEditable === false ? true : false}
            />
          </div>
          <button
            className={`w-fit h-fit cursor-pointer px-4 text-white font-semibold py-3 rounded-lg mb-0 mt-auto cs:mx-auto cs:block cs:mt-8 ${
              contentEditable ? "bg-[#ff4a60]" : "bg-[#d2d2d2]"
            } ${contentEditable ? "cursor-pointer" : "cursor-default"}`}
            onClick={() => {
              if (
                email !== "" &&
                firstName !== "" &&
                lastName !== "" &&
                phone !== 0 &&
                address !== ""
              ) {
                updateUserDetails(email, firstName, lastName, phone, address);
              } else {
                alert("All the fields in the profile are necessary");
              }
            }}
            disabled={contentEditable === false ? true : false}
          >
            Save details
          </button>
        </div>
        <button
          className="w-fit bg-[#ff4a60] px-32 py-3 mx-auto font-semibold text-white rounded-full mt-10"
          onClick={() => {
            logOut();
          }}
        >
          Log out
        </button>
      </section>
    </div>
  );
}
