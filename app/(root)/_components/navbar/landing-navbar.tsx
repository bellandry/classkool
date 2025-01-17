"use client";

import ThemeSwitcherBtn from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { setIsOpen } from "@/redux/slices/open-close-sheet";
import { RootState } from "@/redux/store";
import { useAuth, UserButton } from "@clerk/nextjs";
import { LogIn, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./menu";

export const LandingNavbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.openSheet.value);
  const toggleSheet = () => {
    dispatch(setIsOpen());
  };

  const { userId } = useAuth();

  return (
    <div className="flex sticky w-full items-center justify-between py-4 z-50 top-0">
      <p className="font-semibold text-2xl">Classkool.</p>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        {userId ? (
          <UserButton />
        ) : (
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({
                variant: "outline",
                className:
                  "hidden gap-2 sm:flex ring-1 my-auto ring-slate-800 rounded-lg py-5 hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-700",
              })
            )}
          >
            <LogIn /> Me Connecter
          </Link>
        )}
        <div className="flex my-auto lg:hidden ring-1 ring-slate-800 p-1 rounded-lg">
          <ThemeSwitcherBtn />
        </div>
        <Sheet open={isOpen} onOpenChange={toggleSheet}>
          <SheetTrigger className="ring-1 ring-slate-800 p-2 rounded-lg lg:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gray-100 dark:bg-gray-950 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-0"
          >
            <Menu orientation="mobile" />
            <div className="py-2">
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    className:
                      "sm:hidden gap-2 flex ring-1 my-auto ring-slate-800 rounded-lg py-5 hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-700",
                  })
                )}
                onClick={toggleSheet}
              >
                <LogIn /> Me Connecter
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
