"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcherBtn() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className=""
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 hover:rotate-45" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100 hover:-rotate-45" />
    </Button>
  );
}
