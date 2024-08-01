export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-10">
          <div className="flex flex-col gap-3">
            <div className="nav-brand">
              <img
                src="assets/logo-brand-transparent.png"
                alt=""
                className="logo"
              />
              <div className="text">
                <h1>Anime House</h1>
                <h4>Comics & Coffee</h4>
              </div>
            </div>
            <p>
              Discover tranquility at Ngopi a sanctuary for unwinding, where
              your evenings are perfected with relaxation and rich flavors.
            </p>
            <p>
              hello@animehouse.com <br />
              Phone : +01 23456789
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-7">
              <div>
                <p className="font-playfair-display text-xl">Quick Links</p>
                <ul className="text-sm mt-2 flex flex-col gap-2">
                  <a href="#" className="hover:text-secondary">
                    Services
                  </a>
                  <a href="#" className="hover:text-secondary">
                    Portofolio
                  </a>
                  <a href="#" className="hover:text-secondary">
                    About us
                  </a>
                  <a href="#" className="hover:text-secondary">
                    Testimonials
                  </a>
                </ul>
              </div>
              <div>
                <p className="font-playfair-display text-xl">Resources</p>
                <ul className="text-sm mt-2 flex flex-col gap-2">
                  <a href="#" className="hover:text-secondary">
                    Services
                  </a>
                  <a href="#" className="hover:text-secondary">
                    Privacy Poacy
                  </a>
                  <a href="#" className="hover:text-secondary">
                    Terms & Conditions
                  </a>
                </ul>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="font-playfair-display text-xl">Social Media</p>
                <div className="grid grid-cols-4 mt-2 gap-3">
                  <a
                    href="#"
                    className="bg-secondary flex px-1 py-2 items-center justify-center rounded hover:bg-primary">
                    <img src="assets/icons/facebook.svg" alt="" />
                  </a>
                  <a
                    href="#"
                    className="bg-secondary flex px-1 py-2 items-center justify-center rounded hover:bg-primary">
                    <img src="assets/icons/twitter.svg" alt="" />
                  </a>
                  <a
                    href="#"
                    className="bg-secondary flex px-1 py-2 items-center justify-center rounded hover:bg-primary">
                    <img src="assets/icons/instagram.svg" alt="" />
                  </a>
                  <a
                    href="#"
                    className="bg-secondary flex px-1 py-2 items-center justify-center rounded hover:bg-primary">
                    <img src="assets/icons/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-playfair-display text-xl">Subscribe</p>
              <div className="flex items-center bg-secondary py-2 px-3 mt-3 rounded-lg shadow-sm shadow-primary">
                <img src="assets/icons/envelope.svg" alt="" />
                <input
                  type="text"
                  className="border-none bg-transparent focus:outline-none text-white placeholder:text-accent w-full py-2 px-4"
                  placeholder="name@domain.com"
                />
                <button className="bg-accent text-primary px-5 py-2 lg:px-7 lg:py-3 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
