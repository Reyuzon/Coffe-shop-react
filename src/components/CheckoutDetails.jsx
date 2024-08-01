import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CheckoutDetails() {
  const { cart } = useCart();

  return (
    <section className="container mt-32 mb-4" id="content">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="py-4">
            <h1 className="text-xl font-playfair-display font-semibold mb-4 text-secondary">
              BILLING DETAILS
            </h1>
            <div>
              <label
                for="name"
                className="font-plus-jakarta-sans font-semibold text-[15px] text-slate-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full focus:outline-none inline-block border border-slate-500 mt-2 py-2 px-4 rounded"
              />
            </div>
            <div className="mt-4">
              <label
                for="phone"
                className="font-plus-jakarta-sans font-semibold text-[15px] text-slate-600">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                className="w-full focus:outline-none inline-block border border-slate-500 mt-2 py-2 px-4 rounded"
                placeholder="+62"
              />
            </div>
            <div className="mt-4">
              <label
                for="email"
                className="font-plus-jakarta-sans font-semibold text-[15px] text-slate-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full focus:outline-none inline-block border border-slate-500 mt-2 py-2 px-4 rounded"
              />
            </div>
            <div className="mt-4">
              <label
                for="note"
                className="font-plus-jakarta-sans font-semibold text-[15px] text-slate-600">
                Note
              </label>
              <textarea
                name="note"
                rows="4"
                className="w-full focus:outline-none inline-block border border-slate-500 mt-2 py-2 px-4 rounded"></textarea>
            </div>
          </div>
          <div className="bg-accent text-primary rounded-lg py-4 px-5">
            <h1 className="text-center mb-3 uppercase text-xl font-playfair-display font-semibold">
              YOUR ORDER
            </h1>
            <div className="bg-white px-2 rounded">
              <div className="flex items-center justify-between px-2 py-4 font-playfair-display font-medium border-b border-b-accent">
                <p>PRODUCT</p>
                <p>SUBTOTAL</p>
              </div>
              <div
                id="list-cart"
                className="text-sm flex flex-col gap-2 px-2 py-4 font-plus-jakarta-sans border-b border-b-accent">
                {cart.map((product) => (
                  <div className="flex items-center justify-between w-full">
                    <span>
                      {product.name}&nbsp;&nbsp;x{product.quantity}
                    </span>
                    <p>{product.price}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-sm justify-between px-2 py-4 font-playfair-display border-b border-b-accent">
                <p className="font-medium">Subtotal</p>
                <p className="font-plus-jakarta-sans" id="total">
                  Rp
                  {cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      parseInt(currentValue.price.replace(/[^0-9]/g, ""), 10) *
                        currentValue.quantity,
                    0
                  ) +
                    cart.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(
                          currentValue.price.replace(/[^0-9]/g, ""),
                          10
                        ) *
                          currentValue.quantity,
                      0
                    ) *
                      0.025}
                </p>
              </div>
              <div className="flex items-center text-sm justify-between px-2 py-4 font-playfair-display border-b border-b-accent">
                <p className="font-medium">Shipping</p>
                <p className="font-plus-jakarta-sans">
                  Rp
                  {cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      parseInt(currentValue.price.replace(/[^0-9]/g, ""), 10) *
                        currentValue.quantity,
                    0
                  ) * 0.01}
                </p>
              </div>
              <div className="flex items-center text-sm justify-between px-2 py-4 font-playfair-display border-b border-b-accent">
                <p className="font-medium">Sales Tax</p>
                <p className="font-plus-jakarta-sans">
                  Rp
                  {cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      parseInt(currentValue.price.replace(/[^0-9]/g, ""), 10) *
                        currentValue.quantity,
                    0
                  ) * 0.025}
                </p>
              </div>
              <div className="flex items-center text-sm justify-between px-2 py-4 font-playfair-display">
                <p className="font-semibold text-lg">Total</p>
                <p className="font-plus-jakarta-sans text-xl" id="total-all">
                  Rp
                  {cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator +
                      parseInt(currentValue.price.replace(/[^0-9]/g, ""), 10) *
                        currentValue.quantity,
                    0
                  ) +
                    cart.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(
                          currentValue.price.replace(/[^0-9]/g, ""),
                          10
                        ) *
                          currentValue.quantity,
                      0
                    ) *
                      0.025 +
                    cart.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(
                          currentValue.price.replace(/[^0-9]/g, ""),
                          10
                        ) *
                          currentValue.quantity,
                      0
                    ) *
                      0.01}
                </p>
              </div>
            </div>
            <hr />
            <p className="text-sm my-3 font-plus-jakarta-sans">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button className="buy-now w-full flex items-center gap-2 overflow-hidden justify-center relative group py-4">
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center justify-center gap-8 py-10 mt-10">
          <p className="text-5xl font-playfair-display font-medium text-secondary">
            Your cart is currently empty.
          </p>
          <p className="font-plus-jakarta-sans">
            Before proceed to checkout you must add some products to your
            shopping cart. <br />
            You will find a lot of interesting products on our "Shop" page.
          </p>
          <Link
            to="/#product"
            className="flex items-center gap-2 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-primary to-secondary px-7 lg:px-8 py-3 lg:py-4 w-max mx-auto">
            <p className="text-white font-playfair-display-fc uppercase text-base lg:text-lg">
              Return to shop
            </p>
            <img src="assets/icons/ArrowDownRight.svg" alt="" />
          </Link>
        </div>
      )}
    </section>
  );
}
