import { Button, Table } from '../../ui-kit';
import { mockedData } from './mockedData';
import { columns } from './columns';

export const Leaderboard = () => (
  <div className="flex flex-col gap-8 pt-10 pb-20 h-full px-20">
    <div className="flex items-center justify-between">
      <p className="text-[48px] font-medium">LLM Leaderboard</p>

      <Button>Submit your model</Button>
    </div>

    <p className="text-xl font-normal">We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.</p>

    <Table
      elementKey="id"
      rows={mockedData}
      columns={columns}
    />
  </div>
);
