import About from "../components/About";
import Blog from "../components/Blog";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Cart />
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
}
