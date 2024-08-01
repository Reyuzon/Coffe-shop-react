import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section id="blog" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
        <p className="text-center lg:text-lg">Blog</p>
        <h1 className="text-center font-playfair-display text-2xl lg:text-[36px] mt-2">
          Read our articles
        </h1>
      </motion.div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-10">
        <motion.div
          initial={{ scale: 0.7, translateY: 50 }}
          whileInView={{ scale: 1, translateY: 0 }}
          transition={{ duration: 0.25 }}
          className="border border-grey rounded-tr-[40px] rounded-bl-[40px] py-3 px-4 w-full overflow-hidden">
          <img
            src="assets/nafinia-putra-Kwdp-0pok-I-unsplash.jpg"
            alt=""
            className="w-full rounded-tr-[40px] rounded-bl-[40px]"
          />
          <div className="flex items-center justify-between mt-2 text-sm">
            <div className="flex items-center gap-2">
              <img src="assets/user.svg" alt="" />
              <p>John Doe</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="assets/calendar-blank.svg" alt="" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <p className="font-plus-jakarta-sans font-semibold text-lg lg:text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur. Est tempor morbi
            pellentesque.
          </p>
          <div className="flex items-center gap-2 my-2 justify-end">
            <p>View details</p>
            <img src="assets/icons/caret-right.svg" alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7, translateY: 50 }}
          whileInView={{ scale: 1, translateY: 0 }}
          transition={{ duration: 0.25 }}
          className="border border-grey rounded-tr-[40px] rounded-bl-[40px] py-3 px-4 w-full overflow-hidden">
          <img
            src="assets/nafinia-putra-Kwdp-0pok-I-unsplash.jpg"
            alt=""
            className="w-full rounded-tr-[40px] rounded-bl-[40px]"
          />
          <div className="flex items-center justify-between mt-2 text-sm">
            <div className="flex items-center gap-2">
              <img src="assets/user.svg" alt="" />
              <p>John Doe</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="assets/calendar-blank.svg" alt="" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <p className="font-plus-jakarta-sans font-semibold text-lg lg:text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur. Est tempor morbi
            pellentesque.
          </p>
          <div className="flex items-center gap-2 my-2 justify-end">
            <p>View details</p>
            <img src="assets/icons/caret-right.svg" alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7, translateY: 50 }}
          whileInView={{ scale: 1, translateY: 0 }}
          transition={{ duration: 0.25 }}
          className="border border-grey rounded-tr-[40px] rounded-bl-[40px] py-3 px-4 w-full overflow-hidden">
          <img
            src="assets/nafinia-putra-Kwdp-0pok-I-unsplash.jpg"
            alt=""
            className="w-full rounded-tr-[40px] rounded-bl-[40px]"
          />
          <div className="flex items-center justify-between mt-2 text-sm">
            <div className="flex items-center gap-2">
              <img src="assets/user.svg" alt="" />
              <p>John Doe</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="assets/calendar-blank.svg" alt="" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <p className="font-plus-jakarta-sans font-semibold text-lg lg:text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur. Est tempor morbi
            pellentesque.
          </p>
          <div className="flex items-center gap-2 my-2 justify-end">
            <p>View details</p>
            <img src="assets/icons/caret-right.svg" alt="" />
          </div>
        </motion.div>
      </div>
      <a
        href="#product"
        className="flex items-center gap-2 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-primary to-secondary px-7 lg:px-8 py-3 lg:py-4 w-max mt-10 mx-auto">
        <p className="text-white font-playfair-display-fc uppercase text-base lg:text-lg">
          Read More
        </p>
        <img src="assets/icons/ArrowDownRight.svg" alt="" />
      </a>
    </section>
  );
}
