import { LandingNavbar } from "./_components/navbar/landing-navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col px-2 sm:container relative mx-auto">
      <LandingNavbar />
      {children}
    </div>
  );
};

export default LandingPageLayout;
