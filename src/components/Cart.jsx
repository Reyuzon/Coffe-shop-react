import { HiXMark } from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, dispatch, showCart, showCartDispatch } = useCart();

  const handleHideCart = () => {
    showCartDispatch({ type: "HIDE_CART" });
  };

  const removeItemCart = (data) => {
    dispatch({ type: "REMOVE_ITEM", payload: data });
  };
  return (
    <>
      <div
        className={`w-full fixed top-0 right-0 h-full shadow-sm bg-black/50 z-[90] ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={handleHideCart}></div>
      <div
        className={`w-full max-w-[320px] fixed top-0 right-0 h-full border shadow-sm transition-all bg-white z-[99] ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
        id="cart-container">
        <div className="flex items-center p-5 justify-between border-b border-b-slate-400">
          <p className="font-semibold text-slate-500 text-lg">Shopping Cart</p>
          <div
            className="flex items-center gap-2 cursor-pointer"
            id="close-cart"
            onClick={handleHideCart}>
            <HiXMark className="text-xl mt-0.5" />
            <p className="font-medium">Close</p>
          </div>
        </div>
        <div
          id="cart-list"
          className="max-h-[72%] lg:max-h-[70%] p-4 overflow-y-scroll">
          {cart.length > 0 ? (
            cart.map((product, i) => (
              <div className="flex justify-between mb-3" key={i}>
                <div className="flex gap-2">
                  <div
                    className="w-12 h-12 rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}></div>
                  <div>
                    <p className="font-medium text-gray-500" id="product-name">
                      {product.name}
                    </p>
                    <span className="text-sm text-gray-500 flex items-center gap-[1px">
                      <span>{product.quantity}</span>&nbsp;
                      <HiXMark />
                      &nbsp;
                      <span>{product.price}</span>
                    </span>
                  </div>
                </div>
                <HiXMark
                  className="text-gray-500 cursor-pointer"
                  onClick={() => removeItemCart(product)}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-3 justify-center items-center py-10">
              <i className="fas fa-cart-shopping text-3xl text-gray-500"></i>
              <p className="text-sm">No products in the cart.</p>
            </div>
          )}
        </div>
        <div className="absolute w-full bottom-0 right-0 border-t border-t-slate-400 px-4 py-5 bg-white">
          <div className="flex items-center justify-between font-medium font-plus-jakarta-sans text-lg">
            <p>Subtotal</p>
            <p id="sub-total">
              Rp
              {cart.reduce(
                (accumulator, currentValue) =>
                  accumulator +
                  parseInt(currentValue.price.replace(/[^0-9]/g, ""), 10) *
                    currentValue.quantity,
                0
              )}
            </p>
          </div>
          <Link
            to="/checkout"
            className="flex items-center justify-center gap-2 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-primary to-secondary text-center px-4 py-3 lg:py-4 mt-2">
            <p className="text-white font-playfair-display-fc uppercase text-base lg:text-lg text-center">
              Checkout
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
