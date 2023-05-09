import React, { useContext } from "react";
import CustomerEngagement from "../images/Customer Engagement.png";
import ActionableInsights from "../images/Actionable Insights.png";
import EmployeesProductivity from "../images/Employees Productivity.png";
import OperationsExcellence from "../images/Operations Excellence.png";
import diamond from "../images/diamond.png";
import Ellipse from "../images/Ellipse.png";

import '../styles/Home.css';
import { MenuOutlined, SettingFilled } from "@ant-design/icons";
import { Context } from "../context/CartContext";
import CardPillar from "../components/Card";

const cardsDetails = [
    {
        id: `Customer_Card`,
        price: 100,
        image: CustomerEngagement,
        title: "Customer Engagement",
        description: "Get your own mobile app for industry specific",
        url: "/customerEngagement"
    },
    {
        id: `Actionable_Card`,
        price: 100,
        image: ActionableInsights,
        title: "Actionable Insights",
        description: "Create Dashboards ",
        url: "/actionableInsights"
    },
    {
        id: `Employees_Card`,
        price: 50,
        image: EmployeesProductivity,
        title: "Employees Productivity",
        description: "KPI Builder , Work Conf,Create Oracle Requests",
        url: "/employeesProductivity"
    },
    {
        id: `Operations_Card`,
        price: 100,
        image: OperationsExcellence,
        title: "Operations Excellence",
        description: "Tenant/lessee Managment",
        url: "/operationsExcellence"
    },
];
 const Home = () => {
    const {
        addToCart,
        removeFromCart
      } = useContext(Context);
    return (
        <>
            <div className="px-28 overflow-hidden relative">
                <div className="flex justify-between items-center mt-10">
                    <div className="backgroundBlue"></div>
                    <h1 className="text-3xl flex flex-row font-medium Support">
                        Get Support <img className="ml-2 h-8 mt-1" src={diamond} alt="diamond"></img>
                    </h1>
                    <div
                        className='flex justify-center items-center'
                    >
                        <img src={Ellipse} alt="Ellipse42png" />
                        <MenuOutlined className="relative right-7" />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6'>
                    {
                        cardsDetails.map((card) => (
                            <CardPillar
                                key={card.id}
                                id={card.id}
                                img={card.image}
                                title={card.title}
                                body={card.description}
                                price={card.price}
                                url={card.url}
                                AddToCart={() => addToCart(card.title, card.price)}
                                RemoveFromCart={() => removeFromCart(card.title)}    
                            />
                        ))}
                </div>
                <div className="mt-2 flex flex-row-reverse">
                    <div className="flex me-0">
                        <span className="mx-2 text-slate-500 text-sm flex items-center">
                            <SettingFilled className="pr-2 text-green-700" />{" "}
                            Remaining DTSUs: <span className="pl-4">200</span>
                        </span>
                        <span className="mx-2 text-slate-500 text-sm flex items-center">
                            <SettingFilled className="pr-2 text-red-700" />{" "}
                            Remaining DTSUs: <span className="pl-4">350</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;