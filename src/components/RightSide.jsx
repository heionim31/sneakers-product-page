export default function RightSide() {
  return (
    <div className="max-w-md mx-auto p-8 rounded-md">
      <h2 className="text-1xl font-semibold color-orange">Sneaker Company</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-1xl text-gray-700 mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center mb-1">
        <span className="text-xl font-bold mr-2">$125.00</span>
        <span className="text-sm text-gray-500 line-through color-orange">
          50% off
        </span>
      </div>
      <div className="text-1xl mb-4">$250.00</div>
      <div className="flex items-center mb-4">
        <button className="text-gray-600 border border-gray-300 px-3 py-2 rounded-md mr-2">
          -
        </button>
        <p className="text-xl font-semibold text-gray-800">0</p>
        <button className="text-gray-600 border border-gray-300 px-3 py-2 rounded-md ml-2 mr-5">
          +
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
