export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold">
            AI-Powered Solutions for Everyone – Privacy First, Always Free!
          </h1>
          <p className="mt-4 text-lg">
            Explore our AI tools and services that enhance daily life – from chatbots to health solutions, all while prioritizing your privacy.
          </p>
          <div className="mt-8">
            <button className="bg-blue-500 px-6 py-2 rounded-lg mr-4">
              Explore AI Tools
            </button>
            <button className="bg-green-500 px-6 py-2 rounded-lg">
              Learn More About Us
            </button>
          </div>
        </section>
      </div>
    );
  }