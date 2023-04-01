import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Homepage } from '../pages/Homepage';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Cart } from '../pages/Cart';
import { Orders } from '../pages/Orders';
import { SingleProduct } from '../pages/SingleProduct';
import Wishlist from '../pages/Wishlist/Wishlist';
import Address from '../pages/Address/Address';
import Payment from '../pages/Payment/Payment';
import { NotFound } from '../pages/NoteFound';

const withLayout = (WrappedComponent) => {
  return () => (
    <>
      <Navbar />
      <WrappedComponent />
      <Footer />
    </>
  );
};

const Pages= {
  HomepageLayout: withLayout(Homepage),
  ProductsLayout: withLayout(Products),
  LoginLayout: withLayout(Login),
  SignupLayout: withLayout(Signup),
  CartLayout: withLayout(Cart),
  OrdersLayout: withLayout(Orders),
  SingleProductLayout: withLayout(SingleProduct),
  WishlistLayout: withLayout(Wishlist),
  AddressLayout: withLayout(Address),
  PaymentLayout: withLayout(Payment),
  NotFoundLayout: withLayout(NotFound),
};

export default Pages;