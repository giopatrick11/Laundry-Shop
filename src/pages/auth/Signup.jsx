import Vector from '../../assets/Vector2.svg';
import A from '../../assets/a.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = email === '' || emailRegex.test(email);
  const isPasswordLongEnough = password.length >= 8 || password === '';

  const passwordsMatch = confirmPass === '' || password === confirmPass;

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

      {/* Signup Card */}
      <div class="absolute top-[178px] left-[730px] h-[900px] w-[588px] rounded-tl-[40px] rounded-tr-[40px] bg-[#F1F7F7] shadow-[9px_14px_36px_rgba(0,0,0,0.27),38px_54px_66px_rgba(0,0,0,0.24)]">
        <h1 class="font-dm mt-[44px] text-center text-[36px] leading-none font-bold text-[#030F0F]">
          {' '}
          Create your account
        </h1>
        <p class="font-dm mt-[12px] text-center text-[16px] leading-tight font-normal tracking-[-0.01em] text-[#626262]">
          It’s free and easy
        </p>
        <p class="font-dm mt-[36px] ml-[63px] text-[16px] leading-none font-semibold tracking-[-0.01em] text-[#030F0F]">
          Your Name
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          className="font-dm mt-[11px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border border-[#D9D9D9] bg-white px-4 text-[16px] leading-[150%] text-[#626262]"
        />
        <p class="font-dm mt-[32px] ml-[63px] text-[16px] leading-none font-semibold tracking-[-0.01em] text-[#030F0F]">
          Email
        </p>
        <input
          type="email"
          placeholder="Input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`font-dm mt-[15px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border bg-white px-4 text-[16px] leading-[150%] text-[#626262] ${isValidEmail ? 'border-[#D9D9D9]' : 'border-red-500'}`}
        />
        {!isValidEmail && (
          <p className="mt-[6px] ml-[63px] text-[14px] text-red-500">
            Please enter a valid email address.
          </p>
        )}
        <p className="font-dm mt-[36px] ml-[63px] text-[16px] leading-tight font-semibold tracking-[-0.01em] text-[#030F0F]">
          Password
        </p>
        <input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`font-dm mt-[12px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border bg-white px-[16px] text-[16px] leading-[150%] tracking-[-0.01em] text-[#7A7A7A] focus:outline-none ${
            isPasswordLongEnough ? 'border-[#D9D9D9]' : 'border-red-500'
          }`}
        />

        {!isPasswordLongEnough && (
          <p className="mt-[6px] ml-[63px] text-[14px] text-red-500">
            Password must be at least 8 characters.
          </p>
        )}

        <p className="font-dm mt-[27px] ml-[63px] w-[180px] text-[16px] leading-[150%] font-semibold tracking-[-0.01em] text-[#030F0F]">
          Repeat Password
        </p>
        <input
          type="password"
          placeholder="Re-type your password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className={`font-dm mt-[12px] ml-[63px] h-[51px] w-[460px] rounded-[5px] border bg-white px-[16px] text-[16px] leading-[150%] tracking-[-0.01em] text-[#7A7A7A] focus:outline-none ${
            passwordsMatch ? 'border-[#D9D9D9]' : 'border-red-500'
          }`}
        />
        {!passwordsMatch && (
          <p className="mt-[6px] ml-[63px] text-[14px] text-red-500">
            Passwords do not match.
          </p>
        )}

        <div className="mt-[16px] ml-[63px] flex items-center gap-[6px]">
          <input
            type="checkbox"
            className="h-[17px] w-[17px] cursor-pointer appearance-none rounded-[3px] border border-[#D9D9D9] checked:border-[#00AEEE] checked:bg-[#00AEEE]"
          />

          <p className="font-dm text-[16px] leading-[150%] font-medium tracking-[-0.01em] text-[#626262]">
            I accept the{' '}
            <span className="cursor-pointer font-medium text-[#00AEEE]">
              TERM
            </span>
          </p>
        </div>
        <button className="font-dm mt-[35px] ml-[63px] flex h-[51px] w-[460px] items-center justify-center rounded-[40px] border border-[#D9D9D9] bg-[#00F1FD] text-[20px] font-medium text-[#030F0F]">
          Register
        </button>

        <p className="font-dm mt-[21px] ml-[144px] w-[298px] text-center text-[16px] leading-[150%] tracking-[-0.01em] text-[#626262]">
          Already have an account?
          <Link to="/login" className="ml-1 cursor-pointer text-[#030F0F]">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
