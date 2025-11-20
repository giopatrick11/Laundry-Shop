import Vector from '../../assets/Vector2.svg';
import A from '../../assets/a.svg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="relative mx-auto min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#002325] to-[#001112] xl:h-[1024px] xl:w-[1440px]">
      {/* Bg image */}
      <img
        src={Vector}
        alt="background"
        className="pointer-e7ents-none opacity-100% absolute top-[-140px] left-[-250px] h-[1274] w-[1078px] select-none"
      />
      <h1 className="font-space-grotesk absolute top-[310px] left-[118px] flex items-center gap-[4px] text-[46px] leading-[150%] font-medium tracking-[-0.05em]">
        <img
          src={A}
          alt="A"
          className="h-[29px] w-auto translate-x-[5px] translate-y-[6px]"
        />
        <span className="text-white">pcida</span>
      </h1>

      <h2 className="font-space-grotesk absolute top-[446px] left-[122px] w-[464px] text-[45.36px] leading-[130%] font-normal tracking-[-0.01em] text-white">
        Clean Clothes,
        <br />
        Happy You.
      </h2>

      <p className="font-space-grotesk absolute top-[630px] left-[122px] w-[419px] text-[15px] leading-[150%] font-light tracking-[-0.01em] text-white">
        At Apcida Laundry, we combine technology and care to provide a seamless
        laundry experience. From washing to folding, we ensure your clothes are
        spotless, fresh, and ready when you need them.
      </p>

      {/* Login card */}
      <div class="absolute top-[178px] left-[730px] h-[900px] w-[588px] rounded-tl-[40px] rounded-tr-[40px] bg-[#F1F7F7] shadow-[9px_14px_36px_rgba(0,0,0,0.27),38px_54px_66px_rgba(0,0,0,0.24)]">
        <h1 class="font-dm mt-[44px] text-center text-[36px] leading-none font-bold text-[#030F0F]">
          {' '}
          Welcome Back!
        </h1>
        <p class="font-dm mt-[12px] text-center text-[16px] leading-tight font-normal tracking-[-0.01em] text-[#626262]">
          Log in to continue your experience.
        </p>
        <p class="font-dm mt-[36px] ml-[63px] text-[16px] leading-none font-semibold tracking-[-0.01em] text-[#030F0F]">
          Email
        </p>
        <input
          type="email"
          placeholder="Input your email"
          className="font-dm mt-[15px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border border-[#D9D9D9] bg-white px-4 text-[16px] leading-[150%] text-[#626262]"
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
          <input
            type="checkbox"
            class="h-[17px] w-[17px] flex-shrink-0 cursor-pointer appearance-none rounded-[3px] border border-[#D9D9D9] checked:border-[#00AEEE] checked:bg-[#00AEEE]"
          />

          <p class="font-dm text-[16px] leading-[150%] tracking-[-0.01em] text-[#626262]">
            Remember Me
          </p>
        </div>
        <button class="font-dm mt-[35px] ml-[63px] flex h-[51px] w-[460px] items-center justify-center rounded-[40px] border border-[#D9D9D9] bg-[#00F2FF] text-[20px] font-bold text-[#030F0F]">
          Login
        </button>
        <p className="font-dm mt-[21px] ml-[144px] w-[298px] text-center text-[16px] leading-[150%] tracking-[-0.01em] text-[#626262]">
          Don’t have an account?
          <Link to="/Signup" className="ml-1 cursor-pointer text-[#030F0F]">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
