import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

export default function Router() {
  return (
    <Routes>
      <Route index Component={Home} />
      <Route path="/checkout" Component={Checkout} />
    </Routes>
  );
}
