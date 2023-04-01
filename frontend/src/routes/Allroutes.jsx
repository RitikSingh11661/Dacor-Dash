import { Route, Routes } from "react-router-dom";
import Address from "../pages/Address/Address";
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NoteFound";
import { Orders } from "../pages/Orders";
import Payment from "../pages/Payment/Payment";
import { Products } from "../pages/Products";
import { Signup } from "../pages/Signup";
import { SingleProduct } from "../pages/SingleProduct";
import Wishlist from "../pages/Wishlist/Wishlist";
import OrderSuccessfull from "../pages/OrderSuccessfull";
import TrackOrder from "../pages/TrackOrder/TrackOrder";


export const Allroutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ordersuccessfull" element={<OrderSuccessfull />} />
        <Route path="/trackorder" element={<TrackOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}