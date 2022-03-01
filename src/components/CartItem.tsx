import React, { useEffect, useState } from "react";
import deleteCartItem from "../functions/deleteCartItem";

export default function CartItem(props) {
  const [iceName, setIceName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const imageUrl =
    "http://localhost:3000/uploads/" + props.item.iceName + ".jpg";
  // let quantity: number = 3;
  useEffect(() => {
    setIceName(props.item.iceName);
    // console.log(iceName);
  }, [iceName]);

  return (
    <div className="block w-fit mt-5">
      <div className="flex w-fit">
        <img
          src={imageUrl}
          className="rounded-full w-24 h-24 object-cover mr-5 shadow-lg shadow-slate-500"
          alt=""
        />
        <div className="block w-fit">
          <h2 className="font-semibold text-lg mt-1 text-[#505050]">
            {props.item.iceName}
          </h2>
          <h3 className="mt-1 mb-3 text-[#797979] font-semibold">
            quantity :{" "}
            <span className="font-bold text-black">{props.item.quantity}</span>
          </h3>
          <div className="justify-between flex">
            <h3 className="text-[#ff4a60] font-semibold">
              $ {props.item.quantity * props.item.price}
            </h3>
            <h4
              className="text-[#ff4a60] font-semibold cursor-pointer ml-7"
              onClick={() => {
                deleteCartItem(props.email, props.item.productId);
              }}
            >
              remove
            </h4>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[2px] bg-[#a5a2a2] mx-auto mt-9 rounded-full"></div>
    </div>
  );
}
