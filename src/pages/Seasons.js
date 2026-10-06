import seasons from "../data/seasons.json";
import Footer from "../components/Footer";

function Seasons() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[80vh]">
        <img
          src="/images/seasons-hero.webp"
          alt="Japan Seasons"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Seasons of Japan
            </h1>

            <p className="max-w-3xl mx-auto text-xl">
              Experience Japan's breathtaking beauty throughout the year,
              from spring cherry blossoms to magical winter snow festivals.
            </p>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Discover Japan Through Every Season
          </h2>

          <p className="text-lg text-gray-600 leading-9">
            Japan is one of the few countries where every season feels
            completely different. Spring brings cherry blossoms, summer
            brings exciting festivals and fireworks, autumn paints the
            mountains in red and gold, and winter transforms northern
            Japan into a snowy wonderland.
          </p>

        </div>
      </section>

      {/* SEASON CARDS */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-100">
        <div className="w-auto mx-auto px-70">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Seasonal Guide
            </h2>

            <p className="text-lg text-gray-600">
              Explore the beauty of Japan in every season.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {seasons.map((season) => (
              <div
                key={season.id}
                className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/images/${season.image}`}
                    alt={season.name}
                    className="h-[320px] w-auto object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6 bg-white">
                  <h3 className="text-3xl font-bold mb-3">
                    {season.name}
                  </h3>

                  <p className="text-gray-600">
                    {season.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SPRING */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/images/spring.webp"
              alt="Spring"
              className="rounded-3xl shadow-xl"
            />

            <div>
              <h2 className="text-5xl font-bold mb-6">
                Spring in Japan 🌸
              </h2>

              <p className="text-gray-600 leading-8">
                Spring is Japan's most famous season. Cherry blossoms bloom
                across parks, rivers, and temples creating stunning scenery.
                Locals celebrate with Hanami picnics under the Sakura trees.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* AUTUMN */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-5xl font-bold mb-6">
                Autumn Colors 🍁
              </h2>

              <p className="text-gray-600 leading-8">
                Japan's autumn season is famous for vibrant red and golden
                maple leaves. Kyoto temples and mountain landscapes become
                breathtaking destinations for photographers and travelers.
              </p>
            </div>

            <img
              src="/images/autumn.webp"
              alt="Autumn"
              className="rounded-3xl shadow-xl"
            />

          </div>

        </div>
      </section>

      {/* WINTER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/images/winter.webp"
              alt="Winter"
              className="rounded-3xl shadow-xl"
            />

            <div>
              <h2 className="text-5xl font-bold mb-6">
                Winter Wonderland ❄️
              </h2>

              <p className="text-gray-600 leading-8">
                Hokkaido and northern Japan transform into snowy landscapes.
                Visitors enjoy skiing, snowboarding, winter festivals, and
                relaxing hot springs surrounded by snow.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="py-24 bg-red-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Best Time To Visit Japan
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3">🌸 Spring</h3>
              <p>March - May</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3">☀️ Summer</h3>
              <p>June - August</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3">🍁 Autumn</h3>
              <p>September - November</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3">❄️ Winter</h3>
              <p>December - February</p>
            </div>

          </div>

        </div>

      </section>
      < Footer />
    </div>
  );
}

export default Seasons;