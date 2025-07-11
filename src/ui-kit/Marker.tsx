type Props = {
  type: 'increase' | 'decrease' | 'neutral';
};

export const Marker = ({ type }: Props) => {
  return (
    <div className='w-6 h-6 flex items-center justify-center'>
      {type === 'increase' && <span className="text-[#40FF75]">↑</span>}
      {type === 'decrease' && <span className="text-[#FF1B44]">↓</span>}
      {type === 'neutral' && <span className="text-[#606060]">-</span>}
    </div>
  );
};
