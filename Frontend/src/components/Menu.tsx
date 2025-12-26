import React from 'react';

interface MenuProps {
  title?: string;
  children?: React.ReactNode;
  isOpened?: boolean;
  pos?: string;
  handleMenuToggle?: Function;
}

function Menu({ title, isOpened, pos, handleMenuToggle, children }: MenuProps) {
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
      className={`fixed inset-0 z-20 ${isOpened ? '' : 'hidden'} h-screen w-full bg-white bg-opacity-60`}
    >
      <div className="">
        <h2 className="">{title}</h2>

        <div className="">{buttons}</div>
      </div>
    </div>
  );
}

export default Menu;
