import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { CrowdsourcedAIIntro } from './components/CrowdsourcedAIIntro.tsx';
import { Leaderboard } from './components/leaderboard/Leaderboard.tsx';
import { AIEcosystem } from './components/AIEcosystem.tsx';
import { CompetitionInfo } from './components/CompetitionInfo.tsx';
import { CompanyInfo } from './components/CompanyInfo.tsx';
import { FundingDecentralizedAIIntro } from './components/FundingDecentralizedAIIntro.tsx';

import './App.css'

const imageTopCoordinateMap: Record<number, string> = {
  0: '66px',
  1: '0px',
  2: '-226px',
  3: '-626px',
  4: '-800px',
  5: '-900px'
};

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [sliderEnabled, setSliderEnabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleInitialScroll = (e: React.WheelEvent) => {
    if (!showButtons && e.deltaY > 0) {
      setShowButtons(true);
    }
  };

  const handleSliderScroll = (e: React.WheelEvent) => {
    if (!sliderEnabled) return;
    if (e.deltaY > 0 && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 0 && e.deltaY < 0) {
      setShowButtons(false);
      setSliderEnabled(false);
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    if (showButtons) {
      const timer = setTimeout(() => {
        setSliderEnabled(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [showButtons]);

  const slides = [
    {
      id: 1,
      content: <FundingDecentralizedAIIntro showButtons={showButtons} />
    },
    {
      id: 2,
      content: <CrowdsourcedAIIntro />
    },
    {
      id: 3,
      content: <Leaderboard />
    },
    {
      id: 4,
      content: <AIEcosystem />
    },
    {
      id: 5,
      content: <CompetitionInfo />
    },
    {
      id: 6,
      content: <CompanyInfo />
    }
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden pt-8"
      onWheel={showButtons ? handleSliderScroll : handleInitialScroll}
    >
      <img src="/planet.svg" className="duration-500 object-cover z-0 absolute right-0 transition-all" alt="planet" style={{ top: imageTopCoordinateMap[currentSlide] }} />

      <motion.div
        className="h-full w-full"
        animate={{ y: `-${currentSlide  * 100}vh` }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {slides.map((slide) => (
          <section
            key={slide.id}
            className='h-screen w-full relative'
          >
            {slide.content}
          </section>
        ))}
      </motion.div>

      {currentSlide === 2 && (
        <motion.img
          src="/comet.svg"
          alt="Moving Image"
          className="absolute top-0 left-0"
          initial={{ x: 0, y: 0 }}
          animate={{ x: '100vw', y: '100vh' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}

export default App
