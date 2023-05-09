import { Drawer } from 'antd';
import { useContext, useState } from 'react';
import { Context } from '../context/CartContext';


const SideNav = ({ isOpen, closeSlider, title, children }) => {

  const [placement, setPlacement] = useState('right');
  const { cart } = useContext(Context);

  return (
    <>
      <Drawer
        title={`Your Run ${title}`}
        closable
        placement={placement}
        width={350}
        onClose={() => closeSlider(false)}
        open={isOpen}
        extra={
          <div className='flex flex-row'>
          <span className='text-xs'>
            {`Request in Your ${title}`}
          </span>
          <div
          className={"rounded-full bg-yellow-400 text-white w-5 h-5 pl-1 ml-1 text-sm relative top-0 left-0"}
      >
          {cart.length}
      </div>
      </div>
        }
      >
        {children}
      </Drawer>
    </>
  );
};
export default SideNav;