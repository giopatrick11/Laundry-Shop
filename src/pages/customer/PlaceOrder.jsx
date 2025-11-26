import Sidebar from './components/Sidebar';

export default function PlaceOrder() {
  return (
    <div className="min-h-screen w-full bg-[#001112] p-[35px]">
      {/* WHITE OUTER WRAPPER */}
      <div className="flex h-[955px] w-[1370px] overflow-hidden rounded-[20px] border border-[#013130] bg-white">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 pt-[26px] pl-[65px]">
          {/* PAGE TITLE */}
          <h1 className="font-dm text-[48px] font-black tracking-[-0.25px] text-[#1B1B1B]">
            Place Order
          </h1>

          {/* FORM WRAPPER */}
          <div className="mt-[36px] w-[968px] rounded-[20px] border border-[#1B1B1B]/20 p-[0px]">
            <div className="grid grid-cols-[150px_260px_260px] items-center gap-x-[20px]">
              {/* LABEL */}
              <p className="font-dm text-[16px] leading-[150%] font-semibold tracking-[-0.01em] text-[#1B1B1B]">
                Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
