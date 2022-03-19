import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ProfilePage from "./Profile";
import StoresPage from "./Stores";

export default function Fragment() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
      <Route path="/stores" element={<StoresPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
}
