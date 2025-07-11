import type { Column } from '../../ui-kit/Table.tsx';
import type { Model } from './mockedData.ts';
import { Marker } from '../../ui-kit';

const commonColumnClassName = 'text-right';

export const columns: Column<Model>[] = [
  {
    field: 'marker',
    headerName: '',
    minWidth: '24px',
    maxWidth: '24px',
    renderCell: (row) => <Marker type={row.increased === undefined ? 'neutral' : row.increased ? 'increase' : 'decrease'} />
  },
  {
    field: 'order',
    headerName: '#',
    minWidth: '32px',
    maxWidth: '32px',
    className: 'text-center',
    renderCell: (row) => row.id
  },
  {
    field: 'modelName',
    headerName: 'Model Name',
    minWidth: '250px',
    className: 'text-left',
    renderCell: (row) => row.modelName
  },
  {
    field: 'average',
    headerName: 'Average',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.average
  },
  {
    field: 'arc',
    headerName: 'ARC',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.arc
  },
  {
    field: 'hellaSwag',
    headerName: 'HellaSwag',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.hellaSwag
  },
  {
    field: 'mmlu',
    headerName: 'MMLU',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.mmlu
  },
  {
    field: 'truthfulQA',
    headerName: 'TruthfulQA',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.truthfulQA
  },
  {
    field: 'winogrande',
    headerName: 'Winogrande',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.winogrande
  },
  {
    field: 'gsm8k',
    headerName: 'GSM8K',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.gsm8k
  },
  {
    field: 'earnings',
    headerName: 'Earnings',
    minWidth: '120px',
    className: commonColumnClassName,
    renderCell: (row) => row.earnings
  }
];
