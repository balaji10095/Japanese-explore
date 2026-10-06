import events from "../data/events.json";
import Footer from "../components/Footer";

function Events() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/gion.jpg')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Festivals of Japan
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Experience Japan's colorful festivals, traditions,
              culture, music, dance, and seasonal celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-red-50 rounded-3xl p-8 text-center shadow">
              <h2 className="text-5xl font-bold text-red-600">16+</h2>
              <p className="mt-2 text-gray-600">Major Festivals</p>
            </div>

            <div className="bg-red-50 rounded-3xl p-8 text-center shadow">
              <h2 className="text-5xl font-bold text-red-600">12</h2>
              <p className="mt-2 text-gray-600">Months of Events</p>
            </div>

            <div className="bg-red-50 rounded-3xl p-8 text-center shadow">
              <h2 className="text-5xl font-bold text-red-600">47</h2>
              <p className="mt-2 text-gray-600">Prefectures</p>
            </div>

            <div className="bg-red-50 rounded-3xl p-8 text-center shadow">
              <h2 className="text-5xl font-bold text-red-600">Millions</h2>
              <p className="mt-2 text-gray-600">Visitors Every Year</p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Festival */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <img
              src="/images/gion.jpg"
              alt="Gion Matsuri"
              loading="lazy"
              className="rounded-3xl shadow-xl w-full"
            />

            <div>

              <span className="bg-red-600 text-white px-4 py-2 rounded-full">
                Featured Festival
              </span>

              <h2 className="text-5xl font-bold mt-6 mb-4">
                Gion Matsuri
              </h2>

              <p className="text-gray-600 text-lg">
                One of Japan's most famous festivals held in Kyoto every July.
                Giant decorated floats, traditional costumes,
                cultural performances and historic streets make it unforgettable.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Festival Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-4">
            Famous Festivals
          </h2>

          <p className="text-center text-gray-500 mb-14">
            Explore Japan's most celebrated festivals
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={`/images/${event.image}`}
                  alt={event.name}
                  loading="lazy"
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <span className="text-red-600 font-semibold">
                    {event.month}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {event.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    📍 {event.city}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {event.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Festival Calendar */}
      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12">
            Festival Seasons
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold">🌸 Spring</h3>
              <p className="mt-2">March - May</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold">☀ Summer</h3>
              <p className="mt-2">June - August</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold">🍁 Autumn</h3>
              <p className="mt-2">September - November</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <h3 className="text-2xl font-bold">❄ Winter</h3>
              <p className="mt-2">December - February</p>
            </div>

          </div>

        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-12">
            Festival Travel Tips
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="shadow-lg p-8 rounded-3xl">
              🚄 Book Shinkansen tickets early
            </div>

            <div className="shadow-lg p-8 rounded-3xl">
              🏨 Reserve hotels months ahead
            </div>

            <div className="shadow-lg p-8 rounded-3xl">
              📷 Carry a camera
            </div>

            <div className="shadow-lg p-8 rounded-3xl">
              🎌 Try wearing a Yukata
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Experience Japan?
          </h2>

          <p className="text-xl mb-8">
            Discover unforgettable festivals and traditions across Japan.
          </p>

          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Start Planning
          </button>
        </div>  
      </section>
      <Footer />
    </div>
    
  );
  
}

export default Events;