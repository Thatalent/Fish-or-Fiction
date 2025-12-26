import React from 'react';
import Menu from './Menu';

interface HelpMenuProps {
  isMenuOpen?: boolean;
}

function HelpMenu({ isMenuOpen }: HelpMenuProps) {
  return (
    <>
      <Menu isOpened={isMenuOpen} title={'Help'} pos={'top-[241px]'}>
        <button className="buttons_menu buttons_menu_disabled">
          GAME INFO
        </button>
        <button className="buttons_menu buttons_menu_disabled">
          SCORING INFO
        </button>
        <button className="buttons_menu buttons_menu_disabled">
          LEADERBOARD
        </button>
      </Menu>
    </>
  );
}

export default HelpMenu;
