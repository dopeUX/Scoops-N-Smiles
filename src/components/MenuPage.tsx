import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState } from "../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  changeAuthPageState,
  changeIsLoading,
  changeLoadingState,
} from "../AppSlice";
import getCategories from "../functions/getCategories";
import verifyToken from "../functions/verifyToken";
import saveItemToCart from "../functions/saveItemToCart";
import getProducts from "../functions/getProductItems";

export default function MenuPage() {
  const [categories, setCategories] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const authCheck = useSelector((state: RootState) => {
    return state.appReducer.checkUserAuth;
  });

  useEffect(() => {
    try {
      setShowLoader(true);
      store.dispatch(changeIsLoading(true));
      store.dispatch(changeLoadingState("fixed"));
      getCategories().then((res) => {
        setCategories(res);
        setShowLoader(false);
        store.dispatch(changeIsLoading(false));
        store.dispatch(changeLoadingState("hidden"));
        //console.log("state changed");
      });
    } catch (error) {
      setShowLoader(false);
      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState("hidden"));
      // console.error("unable to get categories", error);
    }
  }, []);

  useEffect(() => {
    try {
      store.dispatch(changeIsLoading(true));
      store.dispatch(changeLoadingState("fixed"));
      setShowLoader(true);
      getProducts(setProducts);
    } catch (error) {
      store.dispatch(changeIsLoading(false));
      store.dispatch(changeLoadingState("hidden"));
      setShowLoader(false);
      //  console.log(error);
    }
  }, []);

  async function checkIfUserLoggedIn(
    itemName: string,
    itemId: string,
  ): Promise<any> {
    if (authCheck === "not logged in") {
      dispatch(changeAuthPageState("animate-slideDown"));
    } else {
      // console.log(itemName + " order placed");
      await jwtVerify(itemId);
      toast(itemName + " added to cart");
      // alert(itemName + " added to cart");
    }
  }
  const jwtVerify = async (itemId: string) => {
    const email = await verifyToken(authCheck);
    saveItemToCart(email, itemId);
  };

  if (showLoader) {
    console.log("...loading");
    return <div>loading...</div>;
  }

  return (
    <div className="mt-3 ml-10 lg:ml-20">
      <ToastContainer />
      {categories.map((item: any, index: number) => {
        return (
          <section className="w-fit h-fit " key={index}>
            <div className="flex">
              <div className="w-fit h-fit flex my-1">
                <h1 className="font-semibold relative text-xl z-10 my-1">
                  {item.category}
                </h1>
                <div className="bg-[#ff4a60] w-16 ml-[-2.3em]"></div>
              </div>
              <div className="w-32 h-1 bg-[#CBCBCB] my-auto rounded-full ml-5"></div>
            </div>
            <div>
              <ul className="inline-block w-full ml-3 my-0 mb-10">
                {products.length &&
                  products
                    .filter((product) => product.category === item.category)
                    .map((item, index) => {
                      return (
                        <li key={index} className="inline-block">
                          <ProductItem
                            iceName={item.iceName}
                            price={item.price}
                            color={item.color}
                            onAddToCartClick={() => {
                              checkIfUserLoggedIn(item.iceName, item._id);
                            }}
                          />
                        </li>
                      );
                    })}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
