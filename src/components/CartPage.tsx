import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "./CartItem";
import axios from "axios";
import { useNavigate } from "react-router";
import getCartItems from "../functions/getCartItems";
import calculateCartTotal from "../functions/calculateCartTotal";
import saveCartItemsToAdmin from "../functions/saveCartItemsToAdmin";
import getLoggeInUserDetails from "../functions/getLoggeInUserDetails";

export default function CartPage() {
  //temp email
  const [email, setEmail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState<any>({});
  const nav = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  // const [products, setProducts] = useState<any[]>([]);
  const authCheck = useSelector((state: RootState) => {
    return state.appReducer.checkUserAuth;
  });
  let total = subtotal === 0 ? 0 : 0.05 * subtotal + subtotal + 20;

  useEffect(() => {
    try {
      if (authCheck !== "not logged in") {
        jwtVerify();
      } else {
        nav("/");
      }

      //for preventing user to go back -------------------
      // window.history.pushState(null, document.title, window.location.href);
      // window.addEventListener("popstate", function (event) {
      //   window.history.pushState(null, document.title, window.location.href);
      // });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const jwtVerify = async () => {
    let config = {
      headers: {
        "x-access-token": authCheck,
      },
    };
    await axios.get("http://localhost:3000/auth-check", config).then((res) => {
      console.log(res.data);
      // setUser(res.data);
      setEmail(res.data.email);

      getCartItems(res.data.email).then(async (res) => {
        setCartItems(res);
        console.log("this is", res);
        calculateCartTotal(res).then((response) => {
          setSubtotal(response);
          console.log(response);
        });
      });
    });
  };

  const saveOrderToAdmin = async () => {
    var currentdate = new Date();
    var datetime =
      (await "Order time : ") +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const user = await getLoggeInUserDetails(authCheck);
    saveCartItemsToAdmin(
      user.email,
      user.firstName,
      user.lastName,
      "active",
      user.phone,
      user.address,
      datetime,
      "$" + total,
      cartItems,
    );
  };

  return (
    <div>
      <header className="w-full py-5 pl-[15%] pr-[17%] relative h-fit flex bg-[#f8f8f8]">
        <img
          src="/assets/back_button.png"
          className="w-16 h-16 cursor-pointer"
          alt=""
          onClick={() => {
            nav(-1);
          }}
        />
        <h1 className="font-bold text-lg my-auto ml-6">Ice cart</h1>
        <h1 className="w-fit logo text-center text-lg my-auto ml-auto mr-0">
          Scoops N<span className="block mx-auto">Smiles</span>
        </h1>
      </header>
      <div className="px-[16%] pt-5 flex flex-row justify-between cp:flex-col pb-10">
        <section className="flex flex-col">
          <h2 className="text-[#ff4a60] font-semibold text-lg ml-3">
            {cartItems.length} items
          </h2>
          {cartItems.map((item: any, index: number) => {
            return <CartItem key={index} item={item} email={email} />;
          })}
        </section>

        <section className="mt-16">
          <div className="h-fit relative bg-[#6c69f9] block text-left px-6 py-7 rounded-[1.2em]">
            <h2 className="w-64 text-white font-semibold text-xl mb-5">
              Delivering to Silicon valley
            </h2>
            <h2 className="w-full text-white font-medium justify-between">
              Subtotal :{" "}
              <span className="float-right font-semibold">$ {subtotal}</span>
            </h2>
            <h2 className="w-full text-white font-medium justify-between my-4">
              Tax : <span className="float-right font-semibold">5%</span>
            </h2>
            <h2 className="w-full text-white font-medium justify-between">
              Delivery charge :{" "}
              <span className="float-right font-semibold">$20</span>
            </h2>
          </div>

          <h2 className="w-[85%] font-bold mx-auto text-2xl my-6">
            Total: <span className="float-right text-[#ff4a60]">$ {total}</span>
          </h2>
          <button
            className="w-[90%] bg-[#ff4a60] mx-auto block rounded-full text-white font-semibold py-4"
            onClick={() => {
              saveOrderToAdmin();
            }}
          >
            Place order
          </button>
        </section>
      </div>
    </div>
  );
}
