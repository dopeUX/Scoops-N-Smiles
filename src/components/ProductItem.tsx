import { useDispatch } from "react-redux";
import { changeAuthPageState } from "../AppSlice";
import ReactStarsRating from "react-awesome-stars-rating";
import { useEffect, useRef } from "react";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const url = "http://localhost:3000/uploads/" + props.iceName + ".jpg";
  const colorRef: any = useRef("#EFD9B2");

  useEffect(() => {
    colorRef.current.style.backgroundColor = props.color;
  }, []);
  //   function slideDownAuthPage() {
  //     dispatch(changeAuthPageState("animate-slideDown"));
  //   }
  return (
    <div className="mr-7 w-fit mt-14 lg:mr-12 hover:transition-all hover:scale-110 duration-300">
      <div
        ref={colorRef}
        className={`relative text-center pt-[9.5em] pb-9 w-[160px] rounded-lg mr:w-[190px] mr:pt-[9em] mr:pb-11 lg:w-[210px] lg:pt-[13em] lg:p lg:pb-14`}
      >
        <img
          alt=""
          src={url}
          className="w-28 h-36 object-cover absolute rounded-xl mt-[-1em] left-0 right-0 mx-auto top-0 mr:w-28 lg:w-36 lg:h-48 shadow-xl shadow-stone-700"
        ></img>
        <h3 className="text-center font-semibold text-sm mx-4 mr:text-base lg:text-xl">
          {props.iceName}
        </h3>
        {/* <ReactStarsRating className="flex cursor-default mx-auto text-center w-fit mt-2" value={3.4} primaryColor={'#6C69F9'} isHalf={true} isEdit={false} size={16}></ReactStarsRating> */}
        <h3 className="text-white text-sm w-fit rounded-md px-3 py-2 font-semibold absolute bottom-0 mb-[-1em] left-2 bg-[#6c69f9] mr:left-3">
          $ {props.price}
        </h3>
        <button
          onClick={() => {
            props.onAddToCartClick();
          }}
          className="bg-[#ff4a60] text-white font-semibold px-4 py-2 cursor-pointer rounded-3xl absolute bottom-0 mb-[-1em] right-1 mr:right-2 lg:text-lg lg:px-5 lg:py-2"
        >
          Add +
        </button>
      </div>
    </div>
  );
}
