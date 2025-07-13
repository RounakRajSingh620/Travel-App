export default function Details() {
  return (
    <div className="h-screen w-full relative bg-white">
      <img
        src="/eiffel.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 p-6 pt-20 max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Experience the Eiffel Tower</h2>
        <p className="text-gray-700 mb-6">Watch the view & book your flight now!</p>

        {/* Embedded video */}
        <div className="aspect-video mb-6">
          <iframe
            src="https://www.youtube.com/embed/Scxs7L0vhZ4"
            title="Eiffel Tower Tour"
            className="w-full h-full rounded-xl"
            allowFullScreen
          />
        </div>

        {/* Search Form */}
        <div className="bg-white/90 p-4 rounded-xl shadow-md">
          <div className="flex flex-col gap-3">
            <input placeholder="From" className="p-2 border rounded" />
            <input placeholder="To" className="p-2 border rounded" />
            <input type="date" className="p-2 border rounded" />
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
