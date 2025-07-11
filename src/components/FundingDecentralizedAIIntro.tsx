import { Button } from '../ui-kit';
import { Badge } from '../ui-kit/Badge.tsx';

import { motion } from 'framer-motion';

type Props = {
  showButtons: boolean;
};

export const FundingDecentralizedAIIntro = ({ showButtons }: Props) => (
  <div className="flex flex-col bg-transparent relative px-20">
    <div className="relative flex w-auto items-center mx-auto gap-6">
      <Button size='small'>
        <span>How It Works</span>
      </Button>

      <Button size='small' variant='secondary'>
        <span>Buy Salt AI</span>
      </Button>
    </div>

    <div className="relative flex flex-col gap-9 mt-[80px]">
      <h1 className="leading-none max-2xl:text-[84px] min-2xl:text-[128px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#963488] via-[#FC6F32] to-[#FF4A59]">
        A new economic primitive for funding decentralized AI
      </h1>

      <p className="text-lg">
        We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
      </p>

      <div className="flex items-center gap-6">
        <Button size='large'>
          <span>Buy Salt AI</span>
        </Button>

        <Button size='large' variant='secondary'>
          <span>Try Now</span>
        </Button>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={showButtons ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative flex gap-4 items-center mt-[100px]"
    >
      <Badge title="10,873" description="LLM models"/>

      <Badge title="$72,470,728" description="paid to data scientists"/>

      <Badge title="6,557" description="members"/>
    </motion.div>
  </div>
);
