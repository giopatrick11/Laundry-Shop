import Vector from '../../assets/Vector-2.svg';

export default function Login() {
  return (
    <div class="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#002325] to-[#001112]">
      {/* Background decorative image */}
      <img
        src={Vector}
        alt="background"
        class="pointer-e7ents-none absolute top-[-320px] left-[70px] h-auto w-[700px] opacity-80 select-none"
      />

      {/* Login card */}
      <div class="absolute top-[180px] left-[730px] h-[844px] w-[588px] rounded-tl-[40px] rounded-tr-[40px] bg-[#F1F7F7] shadow-[9px_14px_36px_rgba(0,0,0,0.27),38px_54px_66px_rgba(0,0,0,0.24)]">
        <h1 class="font-dm mt-[44px] text-center text-[36px] leading-none font-bold text-[#030F0F]">
          {' '}
          Welcome Back!
        </h1>
        <p class="font-dm mt-[12px] text-center text-[16px] leading-tight font-normal tracking-[-0.01em] text-[#626262]">
          Log in to manage your sales and purchases.
        </p>
        <p class="font-dm mt-[36px] ml-[63px] text-[16px] leading-none font-semibold tracking-[-0.01em] text-[#030F0F]">
          Email
        </p>
        <input
          type="email"
          placeholder="Input your email"
          className="font-dm mt-[15px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border border-[#00A3FF] bg-white px-4 text-[16px] leading-[150%] text-[#626262]"
        />
        <p class="font-dm mt-[37px] ml-[63px] text-[16px] leading-tight font-semibold tracking-[-0.01em] text-[#030F0F]">
          Password
        </p>
        <input
          type="password"
          placeholder="Input your password"
          class="font-dm mt-[12px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border border-[#D9D9D9] bg-white px-[16px] text-[16px] leading-[150%] tracking-[-0.01em] text-[#7A7A7A] focus:outline-none"
        />
        <div class="mt-[10px] ml-[63px] flex items-center gap-[6px]">
          {/* Real checkbox but visually styled */}
          <input
            type="checkbox"
            class="h-[17px] w-[17px] flex-shrink-0 cursor-pointer appearance-none rounded-[3px] border border-[#D9D9D9] checked:border-[#00AEEE] checked:bg-[#00AEEE]"
          />

          {/* Label */}
          <p class="font-dm text-[16px] leading-[150%] tracking-[-0.01em] text-[#626262]">
            Remember Me
          </p>
        </div>
        <button class="font-dm mt-[35px] ml-[63px] flex h-[51px] w-[460px] items-center justify-center rounded-[40px] border border-[#D9D9D9] bg-[#00F2FF] text-[20px] font-bold text-[#030F0F]">
          Login
        </button>
        <p class="font-dm mt-[21px] ml-[144px] w-[298px] text-center text-[16px] leading-[150%] tracking-[-0.01em] text-[#626262]">
          Don’t have an account?
          <span class="cursor-pointer text-[#030F0F]"> Sign up here</span>
        </p>
      </div>
    </div>
  );
}
