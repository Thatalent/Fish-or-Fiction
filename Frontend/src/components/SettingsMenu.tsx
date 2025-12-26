import React from 'react';
import Menu from './Menu';

interface SettingsMenuProps {
  isMenuOpen?: boolean;
}

function SettingsMenu({ isMenuOpen }: SettingsMenuProps) {
  return (
    <>
      <Menu isOpened={isMenuOpen} title={'Settings'} pos={'top-[355px]'}>
        <button className="buttons_menu buttons_menu_disabled">LANGUAGE</button>
        <button className="buttons_menu buttons_menu_disabled">
          HIGH CONTRAST
        </button>
        <button className="buttons_menu buttons_menu_disabled">
          SCREEN READER
        </button>
        <button className="buttons_menu buttons_menu_disabled">CAPTIONS</button>
        <button className="buttons_menu buttons_menu_disabled">
          FONT SIZE
        </button>
      </Menu>
    </>
  );
}

export default SettingsMenu;
