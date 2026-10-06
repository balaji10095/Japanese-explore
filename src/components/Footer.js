import footerData from "../data/footer.json";

function Footer() {
  const {
    quickLinks,
    cities,
    contact,
    copyright
  } = footerData;

  return (
    <footer className="bg-black text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 text-center mb-16 shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Japan Journey
          </h2>

          <p className="text-red-100 max-w-3xl mx-auto mb-6">
            Discover breathtaking cities, rich culture, amazing food,
            festivals, anime, and unforgettable travel experiences
            across Japan.
          </p>

          <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
            Plan Your Trip
          </button>

        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <img
              src="/images/logo.png"
              alt="Japan Explorer"
              loading="lazy"
              className="h-20 mb-5"
            />

            <p className="text-gray-300 leading-8">
              Discover the beauty of Japan through its culture,
              food, cities, festivals and unforgettable travel
              experiences.
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
                📘
              </button>

              <button className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
                📸
              </button>

              <button className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
                🐦
              </button>

              <button className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
                ▶️
              </button>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-5 text-red-500">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {link}
                </li>
              ))}

            </ul>

          </div>

          {/* Popular Cities */}
          <div>

            <h3 className="text-2xl font-bold mb-5 text-red-500">
              Popular Cities
            </h3>

            <ul className="space-y-3 text-gray-300">

              {cities.map((city, index) => (
                <li
                  key={index}
                  className="hover:text-red-500 cursor-pointer transition"
                >
                  {city}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-5 text-red-500">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                📧 {contact.email}
              </li>

              <li>
                📍 {contact.location}
              </li>

              <li>
                📞 {contact.phone}
              </li>

            </ul>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            {copyright}
          </p>

          <div className="flex gap-4 mt-5 md:mt-0">

            <button className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              📘
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              📸
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              🐦
            </button>

            <button className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition">
              ▶️
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;