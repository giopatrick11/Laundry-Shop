import Sidebar from './components/Sidebar';
import ArrowIcon from '../../assets/Vector6.svg';

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
          <div className="w-[968px] rounded-[20px] border border-[#1B1B1B]/20 pt-[22px] pb-[30px] pl-[36px]">
            {/* ====================== SERVICE SECTION ====================== */}
            <div className="grid grid-cols-[150px_260px_260px] items-start gap-x-[20px]">
              {/* LEFT LABEL */}
              <p className="font-dm text-[16px] font-semibold tracking-[-0.01em] text-[#1B1B1B]">
                Service
              </p>

              {/* SELECT SERVICE/COMBO */}
              <div className="flex w-[320px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Select Service/Combo <span className="text-[#FF0000]">*</span>
                </label>

                <div className="relative">
                  <select
                    className="font-dm h-[30px] w-[330px] appearance-none rounded-[3px] border border-[#1B1B1B]/20 bg-white pr-[32px] pl-[12px] text-[14px] text-[#919191] outline-none [&>option]:py-[6px] [&>option]:text-[16px]"
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option>Wash + Dry</option>
                    <option disabled>Wash + Dry + Fold</option>
                    <option disabled>Wash + Dry + Fold + Iron</option>
                    <option disabled>
                      Wash + Dry + Fold + Iron + Stain Treatment
                    </option>
                  </select>

                  <img
                    src={ArrowIcon}
                    alt="dropdown"
                    className="pointer-events-none absolute top-1/2 right-[10px] h-[14px] w-[14px] -translate-y-1/2 opacity-70"
                  />
                </div>
              </div>

              {/* LOAD INPUT */}
              <div className="ml-[85px] flex w-[320px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Load Input <span className="text-[#FF0000]">*</span>
                </label>

                <div className="relative">
                  <select
                    className="font-dm h-[30px] w-[330px] appearance-none rounded-[3px] border border-[#1B1B1B]/20 bg-white pr-[32px] pl-[12px] text-[14px] text-[#919191] outline-none [&>option]:py-[6px] [&>option]:text-[16px]"
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option>8 kl</option>
                    <option>16 kl</option>
                    <option>24 kl</option>
                    <option>32 kl</option>
                    <option>40 kl</option>
                  </select>

                  <img
                    src={ArrowIcon}
                    alt="dropdown"
                    className="pointer-events-none absolute top-1/2 right-[10px] h-[14px] w-[14px] -translate-y-1/2 opacity-70"
                  />
                </div>
              </div>
            </div>

            {/* ====================== DELIVERY SECTION ====================== */}
            <div className="mt-[30px] grid grid-cols-[150px_260px_260px] items-start gap-x-[20px]">
              {/* LEFT LABEL */}
              <p className="font-dm text-[16px] font-semibold tracking-[-0.01em] text-[#1B1B1B]">
                Delivery
              </p>

              {/* SELECT DELIVERY TYPE */}
              <div className="flex w-[320px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Select Delivery Type <span className="text-[#FF0000]">*</span>
                </label>

                <div className="relative">
                  <select
                    className="font-dm h-[30px] w-[330px] appearance-none rounded-[3px] border border-[#1B1B1B]/20 bg-white pr-[32px] pl-[12px] text-[14px] text-[#919191] outline-none [&>option]:py-[6px] [&>option]:text-[16px]"
                    defaultValue=""
                  >
                    <option value="" disabled></option>
                    <option>Pickup</option>
                    <option>Delivery</option>
                    <option>Pickup & Delivery</option>
                  </select>

                  <img
                    src={ArrowIcon}
                    alt="dropdown"
                    className="pointer-events-none absolute top-1/2 right-[10px] h-[14px] w-[14px] -translate-y-1/2 opacity-70"
                  />
                </div>
              </div>

              {/* EMPTY */}
              <div></div>
            </div>

            {/* ====================== ADDRESS SECTION ====================== */}
            <div className="mt-[30px] grid grid-cols-[150px_260px_260px] items-start gap-x-[20px]">
              {/* LEFT LABEL */}
              <p className="font-dm text-[16px] font-semibold tracking-[-0.01em] text-[#1B1B1B]">
                Address
              </p>

              {/* STREET ADDRESS */}
              <div className="col-span-2 flex flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Street Address <span className="text-[#FF0000]">*</span>
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[599px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>

              {/* BUILDING NUMBER */}
              <div className="mt-[14px] ml-[170px] flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Building Number
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>

              {/* PUROK */}
              <div className="mt-[14px] ml-[365px] flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Purok <span className="text-[#FF0000]">*</span>
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>

              {/* EMPTY */}
              <div></div>

              {/* BARANGAY */}
              <div className="mt-[14px] ml-[170px] flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Barangay <span className="text-[#FF0000]">*</span>
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>
            </div>

            {/* ====================== INFORMATION SECTION ====================== */}
            <div className="mt-[39px] grid grid-cols-[150px_260px_260px] items-start gap-x-[20px]">
              {/* LEFT LABEL */}
              <p className="font-dm text-[16px] font-semibold tracking-[-0.01em] text-[#1B1B1B]">
                Information
              </p>

              {/* FULL NAME */}
              <div className="flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Full Name <span className="text-[#FF0000]">*</span>
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>

              {/* EMAIL */}
              <div className="ml-[85px] flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Email Address
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="col-start-2 mt-[14px] flex w-[260px] flex-col">
                <label className="font-dm text-[16px] tracking-[-0.01em] text-[#1B1B1B]">
                  Phone Number <span className="text-[#FF0000]">*</span>
                </label>

                <input
                  type="text"
                  className="font-dm h-[30px] w-[260px] rounded-[3px] border border-[#1B1B1B]/20 bg-white pl-[12px] text-[14px] text-[#919191] outline-none"
                />
              </div>
            </div>
          </div>

          {/* ====================== BUTTONS ====================== */}
          <div className="mt-[36px] flex gap-[20px] pl-[529px]">
            {/* CANCEL */}
            <button className="font-dm h-[51px] w-[209px] rounded-[10px] border border-[#D9D9D9] bg-[#DDDDDD] text-[16px] text-[#1B1B1B]">
              Cancel
            </button>

            {/* CONTINUE */}
            <button className="font-dm h-[51px] w-[209px] rounded-[10px] border border-[#D9D9D9] bg-[#00F1FD] text-[16px] text-[#1B1B1B]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
