import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const initialData = [
  {
    title: "latte",
    product: [
      {
        id: 1,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 2,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 3,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 4,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
    ],
  },
  {
    title: "robusta",
    product: [
      {
        id: 5,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 6,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 7,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 8,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
    ],
  },
  {
    title: "arabica",
    product: [
      {
        id: 9,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 10,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 11,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
      {
        id: 12,
        name: "Chocolate Latte",
        image: "assets/olivia-anne-snyder-R5RtlMOYgX8-unsplash.jpg",
        price: "Rp25.000",
        rating: "4.9",
        reviews: "360",
        quantity: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque urna velsit dolor fringilla",
      },
    ],
  },
];

export default function Product() {
  const [activeMenu, setActiveMenu] = useState("latte");
  const [data, setData] = useState(initialData);
  const { dispatch } = useCart();

  const handleAddToCart = (newData) => {
    dispatch({ type: "ADD_ITEM", payload: newData });
  };

  const increaseQuantity = (categoryIndex, productId) => {
    const updatedData = data.map((category, i) => {
      if (i === categoryIndex) {
        return {
          ...category,
          product: category.product.map((product) =>
            product.id == productId
              ? {
                  ...product,
                  quantity:
                    product.quantity < 10
                      ? product.quantity + 1
                      : product.quantity,
                }
              : product
          ),
        };
      }
      return category;
    });
    setData(updatedData);
  };

  const decreaseQuantity = (categoryIndex, productId) => {
    const updatedData = data.map((category, i) => {
      if (i === categoryIndex) {
        return {
          ...category,
          product: category.product.map((product) =>
            product.id == productId
              ? {
                  ...product,
                  quantity:
                    product.quantity > 1
                      ? product.quantity - 1
                      : product.quantity,
                }
              : product
          ),
        };
      }
      return category;
    });
    setData(updatedData);
  };

  return (
    <section id="product" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
        <p className="text-center lg:text-lg">Our products</p>
        <h1 className="text-center font-playfair-display text-2xl lg:text-[36px] mt-2">
          From Top Quality Materials
        </h1>
      </motion.div>
      <div className="mx-auto bg-bright-grey rounded-full p-2 flex w-full lg:max-w-min mt-14 text-center">
        <div
          className={`w-1/3 py-3 lg:py-[16px] lg:px-[40px] rounded-full cursor-pointer ${
            activeMenu == "latte" ? "bg-white" : ""
          }`}
          data-id="#latte"
          onClick={() => setActiveMenu("latte")}>
          Latte
        </div>
        <div
          className={`w-1/3 py-3 lg:py-[16px] lg:px-[40px] rounded-full cursor-pointer ${
            activeMenu == "robusta" ? "bg-white" : ""
          }`}
          data-id="#robusta"
          onClick={() => setActiveMenu("robusta")}>
          Robusta
        </div>
        <div
          className={`w-1/3 py-3 lg:py-[16px] lg:px-[40px] rounded-full cursor-pointer ${
            activeMenu == "arabica" ? "bg-white" : ""
          }`}
          data-id="#arabica"
          onClick={() => setActiveMenu("arabica")}>
          Acabica
        </div>
      </div>
      {data.map((data, indexCategory) => (
        <div
          className={`${
            activeMenu == data.title ? "grid" : "hidden"
          } grid-cols-1 lg:grid-cols-4 gap-10 mt-10 product-container`}
          key={indexCategory}>
          {data.product.map((product, i) => (
            <div key={i}>
              <div
                id="img"
                className="h-[200px] w-full bg-center bg-no-repeat bg-cover rounded-tr-[40px] rounded-bl-[40px]"
                style={{
                  backgroundImage: `url('${product.image}')`,
                }}></div>
              <div className="px-2 mt-4 flex flex-col gap-2 w-full">
                <p
                  id="name"
                  className="font-plus-jakarta-sans font-semibold text-2xl">
                  {product.name}
                </p>
                <p
                  id="price"
                  className="font-plus-jakarta-sans font-bold text-base">
                  {product.price}
                </p>

                <div className="flex items-center gap-2">
                  <img src="assets/star.svg" alt="" />
                  <p className="text-xl font-extrabold">{product.rating}</p>
                  <p>({product.reviews} reviews)</p>
                </div>
                <p>{product.description}</p>
                <hr />
                <div className="flex items-center justify-between gap-2">
                  <p>Jumlah</p>
                  <div className="flex items-center w-32">
                    <button
                      className="buy-min"
                      onClick={() =>
                        decreaseQuantity(indexCategory, product.id)
                      }>
                      -
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      value={product.quantity}
                      readOnly
                      className="buy-count"
                    />
                    <button
                      className="buy-add"
                      onClick={() =>
                        increaseQuantity(indexCategory, product.id)
                      }>
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="buy-now w-full flex items-center gap-2 overflow-hidden justify-center relative group">
                  <div className="translate-y-full bottom-0 transition-all absolute group-hover:top-1/2 group-hover:-translate-y-1/2">
                    <FaCartShopping className="text-xl" />
                  </div>
                  <p className="group-hover:text-transparent transition-all">
                    Add to Cart
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="end mt-20 mb-16"></div>
    </section>
  );
}
