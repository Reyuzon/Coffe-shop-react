import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section id="testimonial" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
        <p className="text-center lg:text-lg">Testimonials</p>
        <h1 className="text-center font-playfair-display text-2xl lg:text-[36px] mt-2">
          What our buyers say
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 gap-y-10 gap-x-14">
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-3">
            <div
              className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full"
              style={{
                backgroundImage:
                  "url('assets/foto-sushi-6anudmpILw4-unsplash.jpg')",
              }}></div>
            <div>
              <p className="font-semibold">Michael Wong</p>
              <div className="flex gap-1.5 items-center">
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.35 }}>
          <div className="flex items-center gap-3">
            <div
              className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full"
              style={{
                backgroundImage:
                  "url('assets/foto-sushi-6anudmpILw4-unsplash.jpg')",
              }}></div>
            <div>
              <p className="font-semibold">Michael Wong</p>
              <div className="flex gap-1.5 items-center">
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-3">
            <div
              className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-full"
              style={{
                backgroundImage:
                  "url('assets/foto-sushi-6anudmpILw4-unsplash.jpg')",
              }}></div>
            <div>
              <p className="font-semibold">Michael Wong</p>
              <div className="flex gap-1.5 items-center">
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
                <img src="assets/star.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-justify">
            Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit
            dolor fringilla volutpat lectus amet. Integer sed pretium odio
            lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
            tortor dui adipiscing.
          </p>
        </motion.div>
      </div>
      <div className="end mt-20 mb-24"></div>
    </section>
  );
}
