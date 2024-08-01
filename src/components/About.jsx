import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
        <p className="text-center lg:text-lg">About Us</p>
        <h1 className="text-center font-playfair-display text-2xl lg:text-[36px] mt-2">
          Why we are the best
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:grid-flow-col-dense gap-8">
        <motion.div
          initial={{ opacity: 0, translateX: -45 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-2 gap-x-5"
          data-aos="fade-right">
          <img
            src="assets/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg"
            alt=""
            height="200"
            className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px] mt-10"
          />
          <img
            src="assets/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg"
            alt=""
            className="rounded-tr-[40px] lg:rounded-tr-[80px] rounded-bl-[40px] lg:rounded-bl-[80px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 45 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet.
          </p>
          <a
            href="#product"
            className="flex items-center gap-2 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-primary to-secondary px-7 lg:px-8 py-3 lg:py-4 w-max mt-6">
            <p className="text-white font-playfair-display-fc uppercase text-base lg:text-lg">
              Read More
            </p>
            <img src="assets/icons/ArrowDownRight.svg" alt="" />
          </a>
        </motion.div>
      </div>
      <div className="end mt-20 mb-24"></div>
    </section>
  );
}
