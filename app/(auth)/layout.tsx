import ThemeSwitcherBtn from "@/components/theme-switcher";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen items-center justify-center flex flex-col">
      <Link href="/" className="font-semibold my-4 text-4xl">
        Classkool.
      </Link>
      <ThemeSwitcherBtn />
      {children}
    </div>
  );
};

export default layout;
