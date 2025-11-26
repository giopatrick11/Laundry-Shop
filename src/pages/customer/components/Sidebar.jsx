import A from '../../../assets/a.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const { pathname } = useLocation();
  console.log('Current pathname:', pathname);
  const isActive = (path) => pathname.toLowerCase() === path.toLowerCase();

  return (
    <div className="flex h-full w-[260px] flex-col border-r-2 border-[#CBCBCB] bg-white pt-[29px] pl-[20px]">
      {/* Logo */}
      <div className="ml-[0px] flex items-center">
        <img
          src={A}
          alt="A"
          className="mr-[-2px] h-[17px] w-auto translate-y-[3px] pl-[20px]"
        />
        <h1 className="font-space-grotesk text-[30px] font-medium tracking-[-0.05em] text-[#1B1B1B]">
          pcida
        </h1>
      </div>

      {/* SERVICES */}
      <div className="relative mt-[69px] ml-[25px]">
        {isActive('/services') && (
          <div className="absolute top-1/2 left-[-16px] h-[40px] w-[178px] -translate-y-1/2 rounded-[10px] bg-gradient-to-r from-[#002325] to-[#001112]" />
        )}
        <Link
          to="/services"
          className={`font-space-grotesk relative text-[20px] leading-[40px] font-medium ${
            isActive('/services') ? 'text-white' : 'text-[#1B1B1B]'
          }`}
        >
          Services
        </Link>
      </div>

      {/* PLACE ORDER */}
      <div className="relative mt-[31px] ml-[25px]">
        {isActive('/place-order') && (
          <div className="absolute top-1/2 left-[-16px] h-[40px] w-[178px] -translate-y-1/2 rounded-[10px] bg-gradient-to-r from-[#002325] to-[#001112]" />
        )}
        <Link
          to="/place-order"
          className={`font-dm-sans relative text-[20px] leading-[150%] font-medium tracking-[-0.01em] ${
            isActive('/place-order') ? 'text-white' : 'text-[#1B1B1B]'
          }`}
        >
          Place Order
        </Link>
      </div>

      {/* TRACK ORDER */}
      <div className="relative mt-[33px] ml-[25px]">
        {isActive('/track-order') && (
          <div className="absolute top-1/2 left-[-16px] h-[40px] w-[178px] -translate-y-1/2 rounded-[10px] bg-gradient-to-r from-[#002325] to-[#001112]" />
        )}
        <Link
          to="/track-order"
          className={`font-dm-sans relative text-[20px] leading-[150%] font-medium tracking-[-0.01em] ${
            isActive('/track-order') ? 'text-white' : 'text-[#1B1B1B]'
          }`}
        >
          Track Order
        </Link>
      </div>

      {/* HISTORY */}
      <div className="relative mt-[33px] ml-[25px]">
        {isActive('/history') && (
          <div className="absolute top-1/2 left-[-16px] h-[40px] w-[178px] -translate-y-1/2 rounded-[10px] bg-gradient-to-r from-[#002325] to-[#001112]" />
        )}
        <Link
          to="/history"
          className={`font-dm-sans relative text-[20px] leading-[150%] font-medium tracking-[-0.01em] ${
            isActive('/history') ? 'text-white' : 'text-[#1B1B1B]'
          }`}
        >
          History
        </Link>
      </div>

      {/* PROFILE */}
      <div className="mt-auto mb-[21px] ml-[0px] flex items-center gap-[12px]">
        <div className="h-[31px] w-[31px] rounded-full bg-gradient-to-br from-[#002325] to-[#001112]" />
        <Link
          to="/profile"
          className={`font-dm-sans text-[20px] leading-[150%] font-medium tracking-[-0.01em] ${
            isActive('/profile') ? 'text-[#002325]' : 'text-[#1B1B1B]'
          }`}
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
