import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="hidden md:flex items-center pl-3 w-full h-16 bg-sky-100">
      <Link href="/" className="absolute text-3xl font-bold">
        <h1>Super finance</h1>
      </Link>
      <div className="w-full h-full flex justify-center items-center space-x-4">
      <div className="w-auto h-full flex items-center p-2 hover:bg-slate-100">
          <Link href="/">加權指數</Link>
        </div>
        <div className="w-auto h-full flex items-center p-2 hover:bg-slate-100">
          <Link href="/etf">ETF 配息計算器</Link>
        </div>
        <div className="w-auto h-full flex items-center p-2 hover:bg-slate-100">
          <Link href="/focus">關注標的</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
