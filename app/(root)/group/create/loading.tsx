import { LoaderCircle } from "lucide-react";

const LoadingGroup = () => {
  return (
    <div className="flex flex-col w-full mt-6 items-center justify-center">
      <LoaderCircle className="size-12 animate-spin" />
      <p className="text-lg font-semibold">Chargement...</p>
    </div>
  );
};

export default LoadingGroup;
