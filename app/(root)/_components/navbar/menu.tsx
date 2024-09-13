"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CONSTANTS } from "@/constants";
import { useNavigation } from "@/hooks/useNavigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type MenuProps = {
  orientation: "mobile" | "desktop";
};

export const Menu = ({ orientation }: MenuProps) => {
  const { section, onSetSection } = useNavigation();

  if (orientation === "desktop") {
    return (
      <Card className="bg-slate-100 dark:bg-gray-950 dark:text-slate-100 dark:border-gray-800 border-slate-100 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 hidden lg:flex rounded-xl">
        <CardContent className="p-0 flex gap-2">
          {CONSTANTS.landingPageMenu.map((menuItem) => (
            <Link
              href={menuItem.link}
              {...(menuItem.section && {
                onClick: () => onSetSection(menuItem.link),
              })}
              className={cn(
                "rounded-lg flex gap-2 py-2 px-4 items-center hover:bg-slate-200 hover:dark:bg-slate-800 hover:ring-1 hover:dark:ring-slate-700 transition-all",
                section === menuItem.link
                  ? "bg-slate-200 dark:bg-slate-800 ring-1 dark:ring-slate-700"
                  : ""
              )}
              key={menuItem.id}
            >
              {section === menuItem.link && <menuItem.icon />}
              {menuItem.label}
            </Link>
          ))}
        </CardContent>
      </Card>
    );
  } else if (orientation === "mobile") {
    return <div></div>;
  } else {
    return;
  }
};
