import { Button } from '../ui-kit';

export const CompetitionInfo = () => (
  <div className="flex w-full h-full items-center justify-between max-2xl:p-[170px] min-2xl:p-[220px]">
    <div className="flex flex-col gap-8 flex-1">
      <p className="text-[48px] font-medium">Text Here</p>

      <p className="text-xl">Every month, we run a competition between all the AI models submitted on a leaderboard. The best model will be featured and will earn tokens.</p>

      <Button>Read Whitepaper</Button>
    </div>

    <div className="flex-1">
      <img src="/moon.svg" alt="moon" className="ml-auto" />
    </div>
  </div>
);
