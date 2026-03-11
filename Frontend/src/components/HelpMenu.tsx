import React from 'react';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
import { MenuType } from '../types';

interface HelpMenuProps {
  isMenuOpen?: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<MenuType>>;
  pos?: string;
}

function HelpMenu({ isMenuOpen, setActiveMenu, pos }: HelpMenuProps) {
  const navigate = useNavigate();
  const handleGameInfoClick = () => {
    setActiveMenu(null);   // closes the menu
    navigate('/game-mode-explanation');
  };
  return (
    <>
      <Menu
        isOpened={isMenuOpen}
        title={'Help'}
        pos={pos ?? `top-[241px] absolute right-[166px]`}
      >
        <button className="buttons_menu buttons_menu_disabled" onClick={handleGameInfoClick}>
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
