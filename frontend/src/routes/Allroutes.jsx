import { Route, Routes } from "react-router-dom";
import Pages from "../wrappers/userWrapper";
import { Admin } from "../pages/Admin";
export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages.HomepageLayout />} />
            <Route path="/products" element={<Pages.ProductsLayout />} />
            <Route path="/login" element={<Pages.LoginLayout />} />
            <Route path="/signup" element={<Pages.SignupLayout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Pages.CartLayout />} />
            <Route path="/orders" element={<Pages.OrdersLayout />} />
            <Route path="/product/:id" element={<Pages.SingleProductLayout />} />
            <Route path="/wishlist" element={<Pages.WishlistLayout />} />
            <Route path="/address" element={<Pages.AddressLayout />} />
            <Route path="/payment" element={<Pages.PaymentLayout />} />
            <Route path="*" element={<Pages.NotFoundLayout />} />
        </Routes>
    )
}   