import info from '../images-videos/Info_LP.svg';
import settings from '../images-videos/Settings_LP.svg';
import trophy from '../images-videos/Trophy_LP.svg';

interface SideBarProps {
  needed?: string[];
  pos?: string;
}

function SideBar({
  needed = ['info', 'settings', 'trophy'],
  pos,
}: SideBarProps) {
  return (
    <div className={`absolute ${pos} z-10 flex flex-col gap-[24px]`}>
      {needed.includes('info') && (
        <button className="landing_page_buttons_side">
          <img
            className="h-[75px] w-[75px]"
            src={info}
            alt="Info"
            aria-hidden="true"
          />
        </button>
      )}
      {needed.includes('settings') && (
        <button className="landing_page_buttons_side">
          {' '}
          <img
            className="h-[70px] w-[75px]"
            src={settings}
            alt="Settings"
            aria-hidden="true"
          />
        </button>
      )}
      {needed.includes('trophy') && (
        <button className="landing_page_buttons_side">
          {' '}
          <img
            className="h-[61px] w-[76px]"
            src={trophy}
            alt="Leaderboards"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}

export default SideBar;
