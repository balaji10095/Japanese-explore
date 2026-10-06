import places from "../data/places.json";
import Footer from "../components/Footer.js"

function Places() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img
          src="/images/Tokyo.webp"
          alt="Japan Places"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Explore Japan
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover ancient temples, modern cities, breathtaking mountains,
              and hidden gems across Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Top Destinations
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Japan offers an incredible mix of tradition, culture,
              technology, nature, and unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {places.map((place) => (
              <div
                key={place.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/images/${place.image}`}
                    alt={place.name}
                    loading="lazy"
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {place.name}
                  </h3>

                  <p className="text-gray-600 mb-5">
                    {place.description}
                  </p>

                  <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-14">
            Travel Tips for Japan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-red-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                🚄 Transportation
              </h3>

              <p className="text-gray-600">
                Use Japan Rail Pass and Shinkansen bullet trains
                to travel quickly between cities.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                🍣 Food
              </h3>

              <p className="text-gray-600">
                Try authentic sushi, ramen, wagyu beef,
                tempura, and local regional dishes.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-3">
                🏯 Culture
              </h3>

              <p className="text-gray-600">
                Visit temples, shrines, traditional villages,
                and experience Japanese hospitality.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Places;  