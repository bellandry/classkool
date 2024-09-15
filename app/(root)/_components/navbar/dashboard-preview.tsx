import Image from "next/image";

const DashboardPreview = () => {
  return (
    <div className="relative">
      <div className="w-full aspect-square rounded-full radial-dark absolute opacity-20" />
      <div className="w-full aspect-video relative">
        <Image
          priority
          src="https://finance-academy.laclass.dev/img/demo-sombre.png"
          className="opacity-[0.95]"
          alt="dashboard preview image"
          sizes="100vw"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default DashboardPreview;
