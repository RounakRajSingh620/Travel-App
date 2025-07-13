import { useRef, useState } from 'react';
import Home from './components/Home';
import DetailsSection from './components/DetailsSection';

export default function App() {
  const scrollRef = useRef(null);
  const [homeTextOnly, setHomeTextOnly] = useState(false);

  const scrollToDetails = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // After 1 second, show only Eiffel/Paris text from Home
    setTimeout(() => setHomeTextOnly(true), 10);
  };

  return (
    <div className="w-full h-screen overflow-auto scroll-smooth">
      <Home onlyText={homeTextOnly} onFlyClick={scrollToDetails} />
      {/* Overlap margin added here */}
      <div ref={scrollRef} className="-mt-40 relative z-30">
        <DetailsSection onFlyClick={scrollToDetails} />
      </div>
    </div>
  );
}
