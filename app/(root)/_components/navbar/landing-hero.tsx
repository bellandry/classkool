import GradientText from "@/components/gradient-text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const LandingHeroSection = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-y-5 md:gap-y-8">
      <GradientText
        element="h1"
        className="text-4xl md:text-6xl font-semibold py-4"
      >
        Rassembler les communautés <br />
        En un point
      </GradientText>
      <p className="text-gray-950/80 dark:text-gray-300/90 mb-3">
        Classkool est une plateforme de communautés en ligne <br />
        permettant de se regrouper par centres d&apos;interêt,{" "}
        <br className="hidden sm:block" />
        collaborer et nouer de solides rélations
      </p>
      <div className="flex flex-col">
        <Link
          href="/group/create"
          className={cn(
            buttonVariants({
              size: "lg",
              className:
                "gap-2 text-base rounded-xl py-5 sm:py-6 flex ring-1 my-auto ring-slate-800 hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-700",
            })
          )}
        >
          <PlusCircle /> Commencer
        </Link>
      </div>
    </div>
  );
};

export default LandingHeroSection;
