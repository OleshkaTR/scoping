import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils.ts';

type Props = PropsWithChildren<{
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary';
  className?: string;
}>;

export const Button = ({ size = 'large', variant = 'primary', className, children }: Props) => {
  return (
    <button
      className={cn('w-fit flex rounded-full font-medium transition-colors text-white items-center justify-center',
        size === 'large' ? 'h-[75px] px-12 text-2xl' : 'px-6 h-[52px] text-lg',
        variant === 'primary' && 'border-2 border-solid border-[#FC6F32] hover:bg-[linear-gradient(106.2deg,_#963488_-12.33%,_#FC6F32_50.28%,_#FF4A59_114.17%)]',
        variant === 'secondary' && 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#963488] hover:via-[#FC6F32] hover:to-[#FF4A59] transition-colors duration-300',
        className
      )}
    >
      {children}
    </button>
  );
};
