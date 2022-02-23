import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "./CartItem";
import axios from "axios";
import getCartItems from "../functions/getCartItems";

export default function CartPage() {
  const authCheck = useSelector((state: RootState) => {
    return state.appReducer.checkUserAuth;
  });

  useEffect(() => {
    jwtVerify();
  }, []);

  const jwtVerify = async () => {
    let config = {
      headers: {
        "x-access-token": authCheck,
      },
    };
    await axios.get("http://localhost:3000/auth-check", config).then((res) => {
      console.log(res.data.email);
      getCartItems(res.data.email);
      //   saveItemToCart(res.data.email, itemId);
    });
  };

  return (
    <div>
      <header className="w-full py-5 pl-[15%] pr-[17%] relative h-fit flex bg-[#f8f8f8]">
        <img
          src="/assets/back_button.png"
          className="w-16 h-16 cursor-pointer"
          alt=""
        />
        <h1 className="font-bold text-lg my-auto ml-6">Ice cart</h1>
        <h1 className="w-fit logo text-center text-lg my-auto ml-auto mr-0">
          Scoops N<span className="block mx-auto">Smiles</span>
        </h1>
      </header>
      <div className="px-[16%] pt-5 flex justify-between ">
        <section className="flex flex-col">
          <h2 className="text-[#ff4a60] font-semibold text-lg ml-3">3 items</h2>
          <CartItem />
          <CartItem />
          <CartItem />
        </section>

        <section className="mt-16">
          <div className="h-fit relative bg-[#6c69f9] block text-left px-6 py-7 rounded-[1.2em]">
            <h2 className="w-64 text-white font-semibold text-xl mb-5">
              Delivering to Silicon valley
            </h2>
            <h2 className="w-full text-white font-medium justify-between">
              Subtotal : <span className="float-right font-semibold">$48</span>
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
            Total: <span className="float-right text-[#ff4a60]">$56</span>
          </h2>
          <button className="w-[90%] bg-[#ff4a60] mx-auto block rounded-full text-white font-semibold py-4">
            Place order
          </button>
        </section>
      </div>
    </div>
  );
}
