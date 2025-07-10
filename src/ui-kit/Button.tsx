import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils.ts';

type Props = PropsWithChildren<{
  size?: 'small' | 'large';
  variant?: 'primary' | 'secondary';
  className?: string;
}>;

export const Button = ({ size = 'large', variant = 'primary', className, children }: Props) => {
  return (
    <button className={cn('flex rounded-full font-medium transition-colors text-white items-center justify-center',
      size === 'large' ? 'h-[75px] px-12 text-2xl' : 'px-8 h-[52px] text-lg',
      variant === 'primary' && 'hover:bg-[linear-gradient(106.2deg,_#963488_-12.33%,_#FC6F32_50.28%,_#FF4A59_114.17%)] border-2 border-solid border-[linear-gradient(106.2deg,_#963488_-12.33%,_#FC6F32_50.28%,_#FF4A59_114.17%)]',
      variant === 'secondary' && 'hover:text-[linear-gradient(106.2deg,_#963488_-12.33%,_#FC6F32_50.28%,_#FF4A59_114.17%)]',
      className
    )}>
      {children}
    </button>
  );
};
