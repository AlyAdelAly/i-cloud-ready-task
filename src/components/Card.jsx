import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import path6 from "../images/Path6.png";
import { Link } from "react-router-dom";

function CardPillar({ id, img, title, body, price, url, AddToCart }) {
    return (
        <div className="text-white">
            <div className=" border rounded-lg bg-white">
                <div className="flex justify-center items-center">
                    <img className=" my-4" src={img} alt={`${title}`} />
                </div>
                <div
                    id={`${id}`}
                    className="border-4 border-white rounded-2xl p-4"
                >
                    <h6 className="font-bold text-lg">{title}</h6>
                    <p style={{ height: "52px" }}>{body}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="mt-2">{price} DTSU*</span>
                        <div className="flex">
                            <Link to={url}>
                                <Button className="bg-neutral-500/60 hover:bg-neutral-700 border-0 mr-2" shape="circle" size="large" >
                                    <img className="w-7 pl-2" src={path6} alt="" />
                                </Button>
                            </Link>
                            <Button onClick={AddToCart} className="bg-neutral-500/60 hover:bg-neutral-700 border-0" shape="circle" size="large" >
                                <PlusOutlined className="text-white w-10 h-10" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPillar;