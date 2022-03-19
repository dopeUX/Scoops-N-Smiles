import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import getCategories from "../functions/getCategories";
import createCategory from "../functions/createCategory";
import saveIceItem from "../functions/addMenuItem";

export default function AddMenuItem() {
  const [price, setPrice] = useState("5");
  const imageRef: any = useRef();
  const [imageSrc, setImageSrc] = useState("/assets/add-menu-item.png");
  const [iceName, setIceName] = useState("");
  const [category, setCategory] = useState("");
  const catInputRef: any = useRef();
  const dropDownRef: any = useRef();
  const [image, setImage] = useState<File>();
  const [color, setColor] = useState<any>("#e1cbcb");
  const [categories, setCategories] = useState<any[]>([]);
  //window.location.href = '/secret';
  let i = 0;

  useEffect(() => {
    //getCategories();
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  function setNav() {
    // nav("/secret/", { replace: true });
    // console.log("yegfygfuyegfe");
    window.location.reload();
  }

  return (
    <div className="relative h-full">
      <header className="w-full h-fit bg-[#f1f1f1] flex justify-between px-[25%] py-5">
        <Link to="/">
          <img
            src="/assets/back_button.png"
            className="w-16 h-16 cursor-pointer"
            alt=""
          />
        </Link>
        <h1 className="my-auto font-semibold text-2xl">Add Ice item</h1>
        <h1 className="text-lg logo">
          Scoops N<span className="block mx-auto">Smiles</span>
        </h1>
      </header>

      <div className="w-full h-full px-[25%] mb-20 mt-14 flex justify-between">
        <label htmlFor="myfile">
          <img
            ref={imageRef}
            src={imageSrc}
            typeof="file"
            alt=""
            className="w-[19em] h-[28em] object-cover cursor-pointer rounded-[2em]"
          ></img>
        </label>
        <input
          type="file"
          onChange={async (e) => {
            //  setImageSrc(e.currentTarget.value);
            setImageSrc(URL.createObjectURL(e.target.files![0]));
            setImage(e.target.files![0]);
            // console.log(e.target.files);
          }}
          accept=".jpg,"
          alt=""
          id="myfile"
          className="hidden w-[20em]"
        />

        <section className="mt-3 w-fit text-center">
          <input
            type="text"
            className="w-72 py-4 px-4 bg-[#eaeaea] focus:outline-none focus:border-[#ff4a60] focus:border-2 focus:ring-1 focus:ring-[#ff4a60] rounded-xl"
            placeholder="Ice name"
            name=""
            id=""
            onChange={(e) => {
              setIceName(e.currentTarget.value);
            }}
          />

          <div className="w-fit flex mt-9 relative align-middle">
            <input
              type="text"
              className="w-72 py-4 px-4 bg-[#eaeaea] focus:outline-none focus:border-[#ff4a60] focus:border-2 focus:ring-1 focus:ring-[#ff4a60] rounded-xl block"
              placeholder="Category"
              name=""
              id=""
              readOnly={true}
              value={category}
              // onChange={(e) => {
              //   setCategory(e.currentTarget.value);
              // }}
            />
            <img
              src="/assets/back.png"
              className="w-12 h-12 absolute cursor-pointer top-1 right-3"
              onClick={() => {
                //condition ---------
                if (i === 0) {
                  dropDownRef.current.style.animation =
                    "slide-down .5s ease forwards";
                  dropDownRef.current.style.display = "flex";
                  i = 1;
                } else {
                  dropDownRef.current.style.display = "none";
                  i = 0;
                }
              }}
              alt=""
            />
            <img
              src="/assets/add.png"
              className="w-10 h-10 absolute right-[-4em] my-auto mt-2 cursor-pointer"
              alt="Create category"
              onClick={() => {
                catInputRef.current.style.display = "block";
              }}
            />
            <div
              ref={dropDownRef}
              className="w-full hidden flex-col text-left top-[3rem] py-3 pl-3 z-10 border-[#6c69f9] border-2 ring-1  bg-white absolute rounded-lg shadow-lg shadow-stone-500"
            >
              {categories.map((item: any, index: number) => {
                return (
                  <h1
                    key={index}
                    className="font-semibold text-lg my-2 cursor-pointer"
                    onClick={() => {
                      setCategory(item.category);
                      dropDownRef.current.style.display = "none";
                    }}
                  >
                    {item.category}
                  </h1>
                );
              })}
            </div>
          </div>

          <div ref={catInputRef} className="relative hidden">
            <input
              type="text"
              className="w-72 py-4 px-4 bg-[#eaeaea] focus:outline-none focus:border-[#ff4a60] mt-7 focus:border-2 focus:ring-1 focus:ring-[#ff4a60] rounded-xl block"
              placeholder="Create category"
              name=""
              id=""
              value={category}
              onChange={(e) => {
                setCategory(e.currentTarget.value);
              }}
            />
            <div className="flex absolute w-fit top-2 right-[-8.3em]">
              <img
                src="/assets/close-black.png"
                className="w-10 h-10 cursor-pointer mr-7"
                alt=""
                onClick={() => {
                  catInputRef.current.style.display = "none";
                }}
              />
              <img
                src="/assets/tick-blue.png"
                className="w-10 h-10 cursor-pointer"
                alt=""
                onClick={async () => {
                  if (category !== "") {
                    createCategory(category, setCategories);
                    setCategory("");
                    catInputRef.current.style.display = "none";
                  } else {
                    alert("category should not be left empty");
                  }
                }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <input
              type="range"
              min="5"
              max="30"
              value={price}
              className="mt-14 mb-11 h-2 appearance-none rounded-3xl bg-[#ff4a60] slider"
              onChange={(e) => {
                setPrice(e.currentTarget.value);
              }}
            />
            <h2 className="w-fit my-auto font-bold text-2xl text-[#6c69f9]">
              $ {price}
            </h2>
          </div>
          <h2 className="font-semibold ml-3">Choose accent</h2>
          <input
            type="color"
            className="w-[90%] my-3 rounded-full border-none"
            name=""
            id=""
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              console.log(color);
            }}
          />
          <button
            className="w-full bg-[#ff4a60] py-4 text-white my-4 rounded-full font-semibold"
            onClick={() => {
              //  uploadImage();
              if (iceName !== "" && category !== "" && image !== undefined) {
                saveIceItem(iceName, category, price, color, image, setNav);
              } else {
                alert("all the details are necessary");
              }
              //saveCategory();
            }}
          >
            Add this item
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
}
