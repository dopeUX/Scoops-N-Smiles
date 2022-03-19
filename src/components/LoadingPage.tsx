import Lottie from "react-lottie";
import animationData from "../lotties/icecream.json";
import { RootState } from "../store";
import { useSelector } from "react-redux";

export default function LoadingPage() {
  const loadingState = useSelector((state: RootState) => {
    return state.appReducer.loadingPageState;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.appReducer.isLoading;
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`w-full h-[100vh] ${loadingState} z-50 bg-[rgba(0,0,0,0.25)]`}
    >
      <div className="">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={!isLoading}
        />
      </div>
    </div>
  );
}
