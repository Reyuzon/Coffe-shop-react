import Counter from "./Counter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="container">
      <div className="flex items-center flex-col justify-between text-center py-5 gap-6">
        <h1 className="font-medium font-playfair-display text-4xl lg:text-5xl">
          Enjoy Your Favorite <br />
          Coffee with Anime House
        </h1>
        <p className="text-lg lg:text-[20px]">
          Discover tranquility at Anime House a sanctuary for unwinding, <br />
          where your evenings are perfected with relaxation and rich flavors.
        </p>
        <a
          href="#product"
          className="flex items-center gap-2 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-primary to-secondary px-8 lg:px-10 py-5 lg:py-6 mt-2">
          <p className="text-white font-playfair-display-fc uppercase text-base lg:text-lg">
            Explore product
          </p>
          <img src="assets/icons/ArrowDownRight.svg" alt="" />
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-3 gap-y-5 lg:grid-cols-6 mt-12 gap-x-4">
        <img
          src="assets/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px] hover:scale-110 transition-all duration-200"
        />
        <img
          src="assets/zarak-khan-69ilqMz0p1s-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] rounded-bl-[40px] lg:rounded-br-[80px] lg:rounded-bl-none lg:rounded-tl-[80px] lg:rounded-tr-none hover:scale-110 transition-all duration-200"
        />
        <img
          src="assets/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px] hover:scale-110 transition-all duration-200"
        />
        <img
          src="assets/patrick-langwallner-Kt1Mk1BrqdU-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] rounded-bl-[40px] lg:rounded-br-[80px] lg:rounded-bl-none lg:rounded-tl-[80px] lg:rounded-tr-none hover:scale-110 transition-all duration-200"
        />
        <img
          src="assets/nathan-dumlao-2z3MOB3kfJU-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px] hover:scale-110 transition-all duration-200"
        />
        <img
          src="assets/devin-avery-5iRgh_G0eRY-unsplash.jpg"
          alt=""
          className="rounded-tr-[40px] rounded-bl-[40px] lg:rounded-br-[80px] lg:rounded-bl-none lg:rounded-tl-[80px] lg:rounded-tr-none hover:scale-110 transition-all duration-200"
        />
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 gap-y-5 gap-x-4 py-10">
        <div className="text-center">
          <span className="font-medium text-4xl">
            <Counter value={30} />+
          </span>
          <p className="font-playfair-display">Coffee Variant</p>
        </div>
        <div className="text-center">
          <span className="font-medium text-4xl">
            <Counter value={27} />+
          </span>
          <p className="font-playfair-display">Meeting room</p>
        </div>
        <div className="text-center">
          <span className="font-medium text-4xl">
            <Counter value={38} />+
          </span>
          <p className="font-playfair-display">Event space</p>
        </div>
        <div className="text-center">
          <span className="font-medium text-4xl">
            <Counter value={32} />+
          </span>
          <p className="font-playfair-display">Global Achievement</p>
        </div>
      </div>
      <div className="end my-10"></div>
    </section>
  );
}
