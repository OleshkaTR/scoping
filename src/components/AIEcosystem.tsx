import { motion } from 'framer-motion';

const urls = [
  '/solana.svg',
  '/arweave.svg',
  '/bittensor.svg',
  '/strange.svg',
  '/telegram.svg'
];

export const AIEcosystem = () => (
  <div className="flex flex-col gap-12 w-full justify-center h-full px-20">
    <p className="text-[48px] font-medium">Projects integrated into the Arrakis AI Ecosystem</p>

    <motion.div className="flex w-full justify-between items-center">
      {urls.map((url, index) => (
        <img key={index} src={url} />
      ))}
    </motion.div>
  </div>
);
