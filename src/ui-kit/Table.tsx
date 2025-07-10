import { cn } from '../lib/utils.ts';
import type { ReactNode } from 'react';

type Column<Row> = {
  field: string;
  headerName: string;
  minWidth: string;
  maxWidth?: string;
  className?: string;
  renderCell: (row: Row) => ReactNode;
};

type Props<Row extends Record<string, string>> = {
  rows: Row[];
  elementKey: keyof Row;
  columns: Column<Row>[];
};

export const Table = <Row extends Record<string, string>>({
  rows,
  elementKey,
  columns
}: Props<Row>) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
              <th key={column.field} className={cn('h-16 text-[#8F99B0]', column.className)}>{column.headerName}</th>
            ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={row[elementKey] || index} className="h-[72px] odd:bg-[#F8F9FB] hover:bg-[#F0F1F5]">
            {columns.map((column) => (
              <td
                key={column.field}
                className={cn('p-4 text-[#8F99B0] flex items-center', column.className)}
                style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
              >
                {column.renderCell(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
