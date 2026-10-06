  import homeData from "../data/home.json";
  import places from "../data/places.json";
  import culture from "../data/culture.json";
  import foods from "../data/foods.json";
  import events from "../data/events.json";
  import seasons from "../data/seasons.json";
  import facts from "../data/facts.json";
  import whyJapan from "../data/whyJapan.json"
  import experiences from "../data/experiences.json"
  import anime from "../data/anime.json"
  import Footer from "../components/Footer";
  

  function Home() {
    const { hero, stats, testimonials } = homeData;
    return (
      <div className="bg-white">

      {/* HERO */}
          <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/${hero.image}')`
            }}
          >
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex items-center min-h-screen">
    <div className="max-w-7xl mx-auto px-6 text-white">
      <p className="uppercase tracking-[5px] text-red-400 mb-4">
        {hero.subtitle}
      </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
        {hero.title}
      </h1>

      <p className="max-w-2xl text-lg md:text-xl mb-8">
        {hero.description}
      </p>

      <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition">
        {hero.buttonText}
      </button>
    </div>
  </div>
</section>

        

        {/* POPULAR DESTINATIONS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto max-h-6xl px-6 text-center">

            <h2 className="text-5xl font-bold text-center mb-12">
              Popular Destinations
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {places.map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                <img
                    src={
                      place.image.startsWith("http")
                        ? place.image
                        : `/images/${place.image}`
                    }
                    alt={place.name}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-2xl font-bold">
                      {place.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {place.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TOP CITIES */}
  

  {/* ANIME & POP CULTURE */}
<section className="py-24 bg-gradient-to-br from-[#0B1026] via-[#5B21B6] to-[#EC4899] text-white relative overflow-hidden">
  
  <div className="max-w-[1400px] mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      Anime & Pop Culture
    </h2>

    <p className="text-center text-purple-100 mb-14 text-lg">
      Explore Japan's globally loved anime universe
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {anime.map((item) => (
        <div
          key={item.id}
          className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
        >

          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-purple-100 text-sm leading-relaxed mb-5">
              {item.description}
            </p>

            <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition">
              Read More
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

        {/* STATS */}
        <section className="py-16 bg-gray-100 ">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow text-center"
                >
                  <h2 className="text-4xl font-bold text-red-600">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </section>

  {/* WHY VISIT JAPAN */}
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-bold text-center mb-4">
        Why Visit Japan?
      </h2>

      <p className="text-center text-gray-500 mb-14">
        A perfect blend of tradition, nature, food, and technology
      </p>

      <div className="grid md:grid-cols-4 gap-8">

        {whyJapan.map((item) => (
          <div
            key={item.id}
            className="text-center bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <div className="text-6xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* FEATURED EXPERIENCES */}
  <section className="py-24 bg-gray-100">
  <div className="max-w-[1400px] mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      Featured Experiences
    </h2>

    <p className="text-center text-gray-500 mb-14">
      Unforgettable activities that make Japan unique
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {experiences.map((item) => (
        <div
          key={item.id}
          className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >

          <div className="overflow-hidden">
            <img
              src={`/images/${item.image}`}
              alt={item.title}
              decoding="async"
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              width="400"
              height="256"
            />
          </div>

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

        {/* CULTURE */}
        <section className="bg-red-100 py-20 text-black">
          <div className="max-w-[1400px] mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-12">
              Japanese Culture
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {culture.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow"
                >
                  <img
                        src={
                          item.image.startsWith("http")
                            ? item.image
                            : `/images/${item.image}`
                        }
                        alt={item.title}
                        loading="lazy"
                        className="h-60 w-full object-cover"
                      />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FOODS */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-12">
              Japanese Foods
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {foods.map((food) => (
                <div
                  key={food.id}
                  className="bg-white rounded-xl overflow-hidden shadow"
                >
                  <img
                      src={
                        food.image.startsWith("http")
                          ? food.image
                          : `/images/${food.image}`
                      }
                      alt={food.name}
                      loading="lazy"
                      className="h-56 w-full object-cover"
                    />

                  <div className="p-4">
                    <h3 className="font-bold text-xl">
                      {food.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FESTIVALS */}
        <section className="bg-gray-100 py-20">
         <div className="max-w-[1400px] mx-auto px-6">

            <h2 className="text-5xl font-bold text-center mb-12">
              Festivals & Events
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl overflow-hidden shadow"
                >
                 <img
                      src={
                        event.image.startsWith("http")
                          ? event.image
                          : `/images/${event.image}`
                      }
                      alt={event.name}
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold">
                      {event.name}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SEASONAL GUIDE */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
    <div className="max-w-auto mx-auto px-12">

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Seasonal Guide
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience Japan throughout the year. Each season offers unique
          landscapes, festivals, foods, and unforgettable memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {seasons.map((season) => (
          <div
            key={season.id}
            className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={
                  season.image.startsWith("http")
                    ? season.image
                    : `/images/${season.image}`
                }
                alt={season.name}
                loading="lazy"
                className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
            {/* Season Badge */}
            <div className="absolute top-5 left-5 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Japan Season
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">

              <h3 className="text-3xl font-bold mb-3">
                {season.name}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                {season.description}
              </p>

              <button className="mt-4 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition">
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  </section>

              {/* JAPAN FACTS */}
        <section className="py-24 bg-gradient-to-r from-red-700 via-red-400 to-red-500 text-white">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              Japan Facts
            </h2>

            <p className="text-center text-red-100 mb-14 text-lg">
              Amazing facts about the Land of the Rising Sun
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {facts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition duration-300 shadow-xl"
                >
                  <div className="text-5xl mb-4">
                    {item.icon}
                  </div>

                  <p className="text-lg leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section> 

        {/* TESTIMONIALS */}
  <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-4">
      Traveler Stories
    </h2>

    <p className="text-center text-gray-500 mb-14">
      Experiences shared by travelers from around the world
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {testimonials.map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >

          <div className="text-yellow-500 text-xl mb-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 italic mb-6">
            "{item.review}"
          </p>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
              {item.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Traveler
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
  </section>

  <Footer />  
      </div>
    );
  }

  export default Home;