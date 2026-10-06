import foods from "../data/foods.json";
import Footer from "../components/Footer";

function Food() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img
          src="/images/food-hero.webp"
          alt="Japanese Food"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Japanese Cuisine
            </h1>

            <p className="max-w-3xl mx-auto text-xl">
              Discover the rich flavors of Japan, from world-famous sushi
              and ramen to traditional sweets and street foods.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Taste Japan
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Japanese cuisine is known for freshness, seasonal ingredients,
            beautiful presentation, and unique flavors. Every region of
            Japan offers its own special dishes and culinary traditions.
          </p>
        </div>
      </section>

      {/* Food Cards */}
      <section className="pb-24">
        <div className="max-w-8xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {foods.map((food) => (
              <div
                key={food.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/images/${food.image}`}
                    alt={food.name}
                    loading="lazy"
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    {food.name}
                  </h3>

                  <p className="text-gray-600">
                    {food.description}
                  </p>

                  <button className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
                    Learn More
                  </button>
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

export default Food;