import React from 'react';
import { CaretDown, CaretUp, Globe } from '@phosphor-icons/react';
import Button from '../Button/Button';

function LanguageSelector() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');

  const languages = ['Deutsch', 'English', 'Español', 'Français', 'Português'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (event) => {
    setSelectedLanguage(event.target.textContent);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-fit">
      <Button
        onClick={toggleMenu}
        className="flex items-center py-3 px-5 border-white rounded-full border-2 max-w-80"
      >
        <span className="flex items-center justify-between">
          <Globe
            className="mr-3"
            size={24}
            color="white"
            weight="bold"
          />
          <span className="text-white text-base font-bold mr-3">
            {selectedLanguage}
          </span>
          {isMenuOpen ? (
            <CaretUp
              size={24}
              color="white"
              weight="bold"
            />
          ) : (
            <CaretDown
              size={24}
              color="white"
              weight="bold"
            />
          )}
        </span>
      </Button>

      {isMenuOpen && (
        <ul
          onClick={selectLanguage}
          className="absolute right-[-10px] bottom-full mb-4 bg-[#44423F] rounded-lg shadow-lg pt-3 px-3 pb-4 flex flex-col gap-1 z-50 w-full"
        >
          {languages.map((language) => (
            <li
              key={language}
              className={`${
                selectedLanguage === language
                  ? 'bg-[#64605D] rounded-lg'
                  : 'bg-[#141313]/40'
              } hover:bg-[#141313] hover:underline rounded-full hover:rounded-lg px-8 py-4 text-white text-base font-semibold flex items-center justify-center cursor-pointer`}
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
