import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const thumbs = ['/thumb1.jpg', '/thumb2.jpg', '/eiffel.jpg', '/thumb3.jpg'];

export default function DetailsSection({ onFlyClick }) {
  const [showContent, setShowContent] = useState(false);
  const [hidePlane, setHidePlane] = useState(false);

  const handlePlaneClick = () => {
    setHidePlane(true);
    setTimeout(() => {
      setShowContent(true);
      onFlyClick();
    }, 10);
  };

  const sectionClass = `bg-white px-5 py-10 text-gray-800 rounded-t-[2rem] relative ${
    hidePlane ? '-mt-[89vh]' : ''
  } z-40 max-w-5xl mx-auto`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={sectionClass}
    >
      {/* Thumbnails + Plane */}
      <AnimatePresence>
        {(!hidePlane || showContent) && (
          <motion.div
            key="thumbnails"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-4 overflow-x-auto px-4"
          >
            {thumbs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="h-21 w-20 rounded-xl object-cover pointer-events-none"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flying Plane Button */}
      <AnimatePresence>
        {!hidePlane && (
          <motion.button
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            onClick={handlePlaneClick}
            className="absolute z-10 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
            style={{
              top: '20%',
              left: '43%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="text-2xl">✈️</span>
          </motion.button>
        )}
      </AnimatePresence>
      {/* </div> */}

      {/* Content after click */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-7 mb-4 text-center md:text-left">
              Paris’ monument-lined boulevards, museums, classical bistros and
              boutiques are enhanced by a new wave of multimedia galleries,
              creative wine bars, design shops and tech start-ups.
            </p>
            <p className="text-sm font-semibold text-blue-600 mb-6 text-center md:text-left cursor-pointer">
              READ MORE
            </p>

            {/* Video Preview */}
            <div className="rounded-xl overflow-hidden mb-6 aspect-video relative">
              <img
                src="/eiffel.jpg"
                alt="Eiffel video preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-white/80 backdrop-blur p-3 rounded-full text-lg">
                  ▶️
                </button>
              </div>
            </div>

            {/* Top Sights */}
            <h3 className="text-lg font-bold mb-2">Top Sights</h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <img
                src="/thumb1.jpg"
                alt="sight"
                className="w-24 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-md font-semibold">Musée du Louvre</p>
                <p className="text-sm text-gray-500">
                  Top choice museum in Louvre & Les Halles
                </p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <button className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-full flex justify-center items-center text-sm hover:bg-gray-800 transition">
                ✈️ SEARCH FLIGHTS
              </button>
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full mt-2 md:mt-0">
                ON SALE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
