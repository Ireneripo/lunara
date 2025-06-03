import React from 'react';

function Logo() {
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isDesktop ? (
    <div className="flex pb-1.5">
      <img
        src="src/assets/logo.svg"
        className="size-10"
      />
      <p className="fredoka-lunara self-center text-2xl pl-1.5">lunara</p>
    </div>
  ) : (
    <img
      src="src/assets/logo.svg"
      className="size-10"
    />
  );
}

export default Logo;
