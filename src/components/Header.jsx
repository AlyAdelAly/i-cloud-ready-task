import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import img_3 from "../images/+3.png";
import Vector from "../images/Vector.png";
import Ellipse from "../images/Ellipse.png";

import kitchen_img from "../images/kitchen_img.png";
import cart_img from "../images/cart_img.png";
import { Context } from "../context/CartContext";
import SideNav from "./SideNav";
import CartContent from "./CartContent";
import EmptyCart from "./EmptyCart";
import KitchenContent from "./KitchenContent";



const Header = () => {
    const {
        cart,
      } = useContext(Context);
      const [openCart, setOpenCart] = useState(false);
      const [openKitchen, setOpenKitchen] = useState(false);

  const toggleCartSider = () => {
    setOpenCart(prevState => !prevState);
  };

  const toggleKitchenSider = () => {
    setOpenKitchen(prevState => !prevState);
  };

    return (
        <nav className="navbar bg-light w-full">
            <div className="flex flex-row ml-24 p-4">
                <Link to="/">
                    <h5 className="text-lg font-bold flex flex-col" style={{ color: '#00244D' }}>
                        Welcome to iCloudReady!
                        <span className="text-xs font-bold" style={{ color: '#637182' }}>
                            You have started your <span style={{ color: '#00244D' }}>30 day trial</span>
                        </span>
                    </h5>
                </Link>

                <div className="flex">
                    <div className="ml-32 flex flex-row relative">
                        <img className="w-9 h-9" src={person1} alt="mage18png" />
                        <img className="w-10 absolute left-6" src={person2} alt="mage17png" />
                        <img className="w-10 absolute left-12" src={person3} alt="mage16png" />
                        <img className="w-10 absolute left-16" src={person4} alt="mage110png" />
                        <img className="w-10 absolute left-20" src={Vector} alt="Vectorpng" />
                        <img className="w-10 absolute left-24" src={Ellipse} alt="Ellipse42png" />
                        <img className="w-4 absolute left-28 top-3" src={img_3} alt="img" />
                    </div>
                    <div className="ml-52">
                        <h6 className="text-lg font-bold flex flex-col" style={{ color: '#637182' }}>
                            Our architects are here to help
                            <span className="text-xs font-bold" style={{ color: '#0097C2' }}>
                                Book a free session
                            </span>
                        </h6>
                    </div>
                </div>

                <div className="flex mx-auto">
                        <Button onClick={toggleCartSider} className="bg-blue-100" shape="circle" size="large" >
                            <img className="w-50 pl-2" src={cart_img} alt="" />
                            <div
                                className={"rounded-full bg-yellow-400 text-white w-4 h-4 text-xs absolute top-0 left-0"}
                            >
                                {cart.length}
                            </div>
                        </Button>
                        <Button onClick={toggleKitchenSider} className=" bg-blue-100 ml-4" shape="circle" size="large" >
                            <img className="w-25 pl-3" src={kitchen_img} alt="" />
                            <div
                                className={"rounded-full bg-yellow-400 text-white w-4 h-4 text-xs absolute top-0 left-0"}
                            >
                                {cart.length}
                            </div>
                        </Button>
                </div>
                {
                    openCart && (
                        <SideNav isOpen={openCart} closeSlider={setOpenCart} title={'Cart'} >
                            {cart.length ? <CartContent /> : <EmptyCart />}
                        </SideNav>
                    )
                }
                {
                    openKitchen && (
                        <SideNav isOpen={openKitchen} closeSlider={setOpenKitchen} title={'Kitchen'} >
                            {cart.length ? <KitchenContent /> : <EmptyCart />}
                        </SideNav>
                    )
                }
            </div>
        </nav>
    );
}

export default Header;