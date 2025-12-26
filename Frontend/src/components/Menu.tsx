import React from 'react';

interface MenuProps {
  title?: string;
  children?: React.ReactNode;
  isOpened?: boolean;
  pos?: string;
}

function Menu({ title, isOpened, pos = 'top-[355px]', children }: MenuProps) {
  const buttons = React.Children.toArray(children)
    .filter((child) => {
      if (React.isValidElement(child) && child.type === 'button') {
        return true;
      }

      console.warn('Menu only accepts <button> elements as children.');
      return false;
    })
    .slice(0, 5);

  return (
    <div
      className={`fixed inset-0 z-20 ${isOpened ? '' : 'hidden'} h-screen w-full bg-white bg-opacity-30`}
    >
      <div
        className={`absolute right-[166px] rounded-[16px] px-[32px] pb-[24px] pt-[10px] ${pos} w-[445px] bg-white [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)]`}
      >
        <h2 className="m-0 text-center font-lilitaone text-[80px] font-normal -tracking-[2px] text-[#1B3567]">
          {title}
        </h2>

        <div className="flex flex-col content-center gap-[17px]">{buttons}</div>
      </div>
    </div>
  );
}

export default Menu;
