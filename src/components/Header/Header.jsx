import React from 'react';
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import SuperHeader from '../SuperHeader/SuperHeader';

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SuperHeader>Lunara therapy is now available →</SuperHeader>
      <div
        className={`bg-[#ffffff] sticky top-0 ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <div className='flex justify-between mx-12 h-20'>
          <Navbar />
          <Options />
        </div>
      </div>
    </>
  );
}

export default Header;
