import Sidebar from './components/Sidebar';

export default function History() {
  return (
    <div className="min-h-screen w-full bg-[#001112] p-[35px]">
      {/* WHITE ROUNDED CONTAINER (WRAPS SIDEBAR + CONTENT) */}
      <div className="flex h-[955px] max-h-full w-[1370px] max-w-full overflow-hidden rounded-[20px] border border-[#013130] bg-white">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 p-[50px]">
          {/* HEADER */}
          <div className="mb-10 flex items-center justify-between">
            <h1 className="text-[36px] font-semibold text-[#00D8FF]">
              Services
            </h1>
            <p className="cursor-pointer text-[16px] text-[#626262]">
              Track Order
            </p>
          </div>

          {/* CONTENT BOX (the big white rounded box inside) */}
          <div className="grid grid-cols-2 gap-10 pr-5">
            <div className="h-[230px] rounded-[20px] border border-[#E5E5E5] p-6 shadow-md">
              {/* service card */}
            </div>
            <div className="h-[230px] rounded-[20px] border border-[#E5E5E5] p-6 shadow-md"></div>
            <div className="h-[230px] rounded-[20px] border border-[#E5E5E5] p-6 shadow-md"></div>
            <div className="h-[230px] rounded-[20px] border border-[#E5E5E5] p-6 shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
