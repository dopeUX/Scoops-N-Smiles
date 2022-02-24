import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ProfilePage from "./Profile";
import StoresPage from "./Stores";
import { AnimatedSwitch } from "react-router-transition";

export default function Fragment() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        //className="switch-wrapper"
      >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/stores" element={<StoresPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </AnimatedSwitch>
    </Router>
  );
}
