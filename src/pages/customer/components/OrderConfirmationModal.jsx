// src/components/Sidebar.jsx
import A from '../assets/a.svg';

export default function Sidebar() {
  return (
    <div className="h-full w-[260px] border-r border-[#D9D9D9] bg-white px-6 pt-8">
      {/* Logo */}
      <div className="flex items-center gap-[4px]">
        <img src={A} alt="A" className="h-[24px] w-auto translate-y-[2px]" />
        <h1 className="font-space-grotesk text-[30px] font-medium tracking-[-0.05em] text-[#1B1B1B]">
          pcida
        </h1>
      </div>
    </div>
  );
}
