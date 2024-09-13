const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col px-2 sm:container relative mx-auto">
      {children}
    </div>
  );
};

export default LandingPageLayout;
