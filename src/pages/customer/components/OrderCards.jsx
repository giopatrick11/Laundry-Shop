export default function OrderCard({ number, details, status, statusColor }) {
  return (
    <div className="flex h-[94px] w-[968px] items-center justify-between rounded-[15px] border border-[#1B1B1B]/20 bg-white px-[24px] shadow-[0_4px_8px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_16px_24px_rgba(0,0,0,0.04),0_24px_32px_rgba(0,0,0,0.04)]">
      <div>
        <p className="font-dm text-[24px] leading-[150%] font-semibold tracking-[-0.01em]">
          Order #{number}
        </p>

        <p className="font-dm -mt-[4px] text-[16px] leading-[150%] tracking-[-0.01em] text-[#7F7F7F]">
          {details}
        </p>
      </div>

      <p
        className="font-dm text-[24px] leading-[150%] font-semibold tracking-[-0.01em]"
        style={{ color: statusColor }}
      >
        {status}
      </p>
    </div>
  );
}
