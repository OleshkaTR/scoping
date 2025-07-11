type Props = {
  title: string;
  description: string;
};

export const Badge = ({ title, description }: Props) => (
  <div className="flex-1 flex flex-col items-center justify-center rounded-full max-3xl:py-5 3xl:py-8 text-white bg-[linear-gradient(106.2deg,rgba(150,52,136,0.2)_-12.33%,rgba(252,111,50,0.2)_50.28%,rgba(255,74,89,0.2)_114.17%)]">
    <p className="3xl:text-[64px] max-3xl:text-[42px] font-semibold">{title}</p>

    <p className="text-2xl font-semibold">{description}</p>
  </div>
);
