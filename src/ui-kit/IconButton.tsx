import { cn } from '../lib/utils.ts';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  disabled?: boolean;
  className?: string;
}>;

export const IconButton = ({ disabled, className, children }: Props) => {
  return (
    <button className={cn('flex items-center justify-center p-4 border border-solid border-white hover:border-[linear-gradient(106.2deg,_#963488_-12.33%,_#FC6F32_50.28%,_#FF4A59_114.17%)]',
      disabled && 'border-[#808080] text-[#808080]',
      className)}>
      {children}
    </button>
  );
};
