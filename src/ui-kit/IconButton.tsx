import { cn } from '../lib/utils.ts';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}>;

export const IconButton = ({ disabled = false, className, onClick, children }: Props) => {
  return (
    <button
      className={cn('flex rounded-full items-center justify-center h-14 w-14 border border-solid border-white hover:border-[#FC6F32] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#963488] hover:via-[#FC6F32] hover:to-[#FF4A59] transition-colors duration-300',
        disabled && 'border-[#808080] text-[#808080]',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
