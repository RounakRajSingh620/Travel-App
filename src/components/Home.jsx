import { useState } from "react";

export default function Home({ onArrowClick, onlyText }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/eiffel.jpg"
        alt="Eiffel Tower"
        className="w-full h-full object-cover absolute z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Always Visible: Arrow and Heart Buttons */}
      <button
        onClick={onArrowClick}
        className="absolute top-5 left-5 z-20 text-white text-2xl hover:scale-110 transition-transform duration-200"
      >
        ⬇️
      </button>

      <button
        onClick={handleLike}
        className={`absolute top-5 right-5 z-20 text-2xl transition-transform duration-300 ${
          liked ? "scale-125 text-red-500" : "text-white"
        }`}
      >
        {liked ? "❤️" : "🤍"}
      </button>

      {/* Eiffel Tower Text (centered if onlyText, else bottom-left) */}
      <div
        className={`absolute z-30 text-white ${
          onlyText
            ? "top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            : "bottom-52 left-5 text-left"
        }`}
      >
        {/* Show ON SALE badge only if not onlyText */}
        {!onlyText && (
          <span className="bg-green-600 text-xs px-2 py-1 rounded-full">
            ON SALE
          </span>
        )}

        <h1 className="text-3xl font-bold mt-2">Eiffel Tower</h1>
        <p className="text-sm">Paris, France</p>
      </div>
    </div>
  );
}
