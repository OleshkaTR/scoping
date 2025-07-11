export const CompanyInfo = () => (
  <div className="flex h-full w-full">
    <div className="px-20 flex flex-col justify-end h-[552px] w-full mt-auto gap-[27px] pb-[120px] bg-[url('/earth_background.svg')] bg-cover bg-center">
      <div className="w-full flex items-center justify-center gap-20">
        <a href="#">
          <p className="font-semibold">Home</p>
        </a>

        <a href="#">
          <p className="font-semibold">LeaderBoard</p>
        </a>

        <a href="#">
          <p className="font-semibold">About</p>
        </a>
      </div>

      <div className="w-full h-[1px] bg-[#8E8E8E]" />

      <div className='flex w-full items-center justify-between'>
        <div className="flex items-center gap-2">
          <div className="rounded-full h-8 w-8 bg-[#8E8E8E]" />

          <div className="rounded-full h-8 w-8 bg-[#8E8E8E]" />

          <div className="rounded-full h-8 w-8 bg-[#8E8E8E]" />
        </div>

        <div className="flex items-center gap-8">
          <a href="#">
            <p className="text-[#8E8E8E] text-xs">Terms of Use</p>
          </a>

          <a href="#">
            <p className="text-[#8E8E8E] text-xs">Privacy Policy</p>
          </a>

          <a href="#">
            <p className="text-[#8E8E8E] text-xs">Cookie Policy</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
