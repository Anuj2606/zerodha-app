import landing from '../landing.png';
import ecosystem from '../ecosystem.png';

function Home() {
  return (
    <div>
      <div className="text-center py-20">
        <div className="w-full flex justify-center items-center p-4">
          <img
            src={landing}
            className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Invest in everything</h1>
        <p className="text-lg mb-8">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <div className="flex justify-center">
          <a href="/signup">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Sign up for free
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Trust with confidence
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <div>
              <h3 className="font-semibold text-xl">Customer-first always</h3>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">No spam or gimmicks</h3>
              <p>
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">The Zerodha universe</h3>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Do better with money</h3>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mt-6 text-gray-800">The Zerodha Universe</h3>
              <p className="text-gray-600">
                A suite of products designed to make your investing experience seamless.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={ecosystem}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Open a Zerodha account
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <a href="/signup">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            Sign up for free
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
