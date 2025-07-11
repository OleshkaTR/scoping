import { cn } from '../lib/utils.ts';
import { type ReactNode, useRef, useState } from 'react';
import { IconButton } from './IconButton.tsx';

export type Column<Row> = {
  field: string;
  headerName: string;
  minWidth: string;
  maxWidth?: string;
  className?: string;
  renderCell: (row: Row) => ReactNode;
};

type Props<Row extends Record<string, string | number | boolean>> = {
  rows: Row[];
  elementKey: keyof Row;
  columns: Column<Row>[];
};

export const Table = <Row extends Record<string, string | number | boolean>>({
  rows,
  elementKey,
  columns
}: Props<Row>) => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowScrollUp(el.scrollTop > 0);
  };

  const handleArrowClick = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({
      top: showScrollUp ? 0 : el.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="overflow-auto"
        onScroll={handleScroll}
      >
      <table className="w-full h-full">
        <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.field}
              scope="col"
              className={cn('h-16 text-[#8F99B0] last-of-type:pr-6', column.className)}
            >
              {column.headerName}
            </th>
          ))}
        </tr>
        </thead>

        <tbody className="overflow-auto">
        {rows.map((row, index) => (
          <tr
            key={typeof row[elementKey] !== 'boolean' ? row[elementKey] : index}
            className="h-[72px] odd:bg-[#C9D9FF14] hover:bg-[#C9D9FF14]"
          >
            {columns.map((column) => (
              <td
                key={column.field}
                className={cn('p-4 text-[#8F99B0] last-of-type:pr-6', column.className)}
                style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
              >
                {column.renderCell(row)}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      </div>

      <div className="ml-auto w-fit">
        <div className="flex items-center gap-14">
          <p className={cn(
            'text-lg font-medium transition-opacity duration-300',
            showScrollUp ? 'opacity-100' : 'opacity-0'
          )}>
            View full leaderboard
          </p>

          <IconButton onClick={handleArrowClick}>{showScrollUp ? '↑' : '↓'}</IconButton>
        </div>
      </div>
    </>
  );
};
