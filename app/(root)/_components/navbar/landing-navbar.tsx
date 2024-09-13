import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "./menu";

export const LandingNavbar = () => {
  return (
    <div className="flex sticky w-full items-center justify-between py-5 z-50 top-0">
      <p className="font-bold text-2xl">Classkool</p>
      <Menu orientation="desktop" />
      <div className="flex">
        <Link
          href="/sign-in"
          className={cn(
            "dark:bg-gray-50 dark:text-gray-900",
            buttonVariants({
              variant: "default",
              size: "lg",
            })
          )}
        >
          Me Connecter
        </Link>
      </div>
    </div>
  );
};
