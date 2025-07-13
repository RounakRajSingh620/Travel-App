// src/components/Carousel.jsx
import { useState } from "react";

const thumbs = ["/thumb1.jpg", "/thumb2.jpg", "/eiffel.jpg", "/thumb3.jpg"];

export default function Carousel() {
  const [active, setActive] = useState(2);

  return (
    <div className="absolute bottom-5 w-full z-20 flex justify-center space-x-4 overflow-x-auto px-4">
      {thumbs.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`thumb-${i}`}
          onClick={() => setActive(i)}
          className={`h-20 w-20 sm:h-24 sm:w-24 rounded-xl object-cover transition-all duration-300 cursor-pointer ${
            i === active ? "scale-110 shadow-lg" : "scale-95 opacity-70"
          }`}
        />
      ))}
    </div>
  );
}
