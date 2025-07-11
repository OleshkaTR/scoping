import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const urls = [
  '/solana.svg',
  '/arweave.svg',
  '/bittensor.svg',
  '/strange.svg',
  '/telegram.svg'
];

type Props = {
  isSlideInFocus?: boolean;
};

export const AIEcosystem = ({ isSlideInFocus }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isSlideInFocus) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);

      return () => clearTimeout(timer);
    }
  }, [isSlideInFocus]);

  useEffect(() => {
    if (isSlideInFocus === false) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);

      return () => clearTimeout(timer);
    }
  }, [isSlideInFocus]);

  return (
    <div className="flex flex-col gap-12 w-full justify-center h-full">
      <p className="text-[48px] font-medium px-20">Projects integrated into the Arrakis AI Ecosystem</p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-full items-center justify-between px-20"
          animate={isAnimating ? { x: '-100px' } : { x: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {urls.map((url, index) => (
            <motion.img
              key={`${url}-${index}`}
              src={url}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
