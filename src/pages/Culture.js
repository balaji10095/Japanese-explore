import culture from "../data/culture.json";
import Footer from "../components/Footer";

function Culture() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[70vh]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_Fuji_southern_wind_clear_morning.jpg/1280px-Red_Fuji_southern_wind_clear_morning.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
          alt="Japanese Culture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Japanese Culture
            </h1>

            <p className="max-w-3xl mx-auto text-xl">
              Explore the traditions, customs, festivals, arts,
              and timeless heritage that make Japan unique.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-10">
            Discover Japanese Traditions
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Japanese culture blends centuries-old traditions with
            modern innovation. From ancient temples and tea ceremonies
            to anime and technology, Japan offers one of the richest
            cultural experiences in the world.
          </p>

        </div>
      </section>

      {/* CULTURE GRID */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {culture.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CULTURE FACTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-14">
            Interesting Facts
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-red-50 p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-red-600">6800+</h3>
              <p className="mt-3">Islands in Japan</p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-red-600">2000+</h3>
              <p className="mt-3">Annual Festivals</p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-red-600">47</h3>
              <p className="mt-3">Prefectures</p>
            </div>

            <div className="bg-red-50 p-8 rounded-3xl text-center">
              <h3 className="text-4xl font-bold text-red-600">25+</h3>
              <p className="mt-3">UNESCO Sites</p>
            </div>

          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-8">
            "Tradition is not the worship of ashes,
            but the preservation of fire."
          </h2>

          <p className="text-xl">
            Japanese culture continues to inspire the world through
            its beauty, discipline, respect, and innovation.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Culture;