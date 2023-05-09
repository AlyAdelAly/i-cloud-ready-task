import React, { useContext } from 'react'
import { Context } from '../context/CartContext';
import { Alert, Button, Col, Divider, Row } from 'antd';
import { DeleteFilled, CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import rectImg from '../images/Rectangle 32.png'
import giftImg from '../images/gift-box.png';

const CartContent = () => {
    const { cart, removeFromCart, increaseItem, decreaseItem, showCartAlert, setShowCartAlert, showMesaage,setShowMessage } = useContext(Context);


    const handleShowAlert = () => {
        setShowCartAlert(true);
        setTimeout(() => {
            setShowCartAlert(false);
         }, 2000)
    }

    const handleShowMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
         }, 2000)
    }

    return (
        <>
            <Row className='pb-2'>
                <Col className='font-semibold' md={{ span: 12 }} >
                    Product
                </Col>
                <Col className='font-semibold' md={{ span: 5 }}>Qty</Col>
                <Col className='font-semibold' md={{ span: 5 }}>Remove</Col>
                <Divider className='my-2' />
            </Row>

            <ul className="w-auto">
                {cart.map(item => (
                    <div key={item.key}>
                        <Row className='pt-2'>
                            <Col md={{ span: 12 }} >
                                <div className='flex flex-row justify-center items-center'>
                                    <div className='bg-gray-200 py-2 px-2 rounded-md w-fit'>
                                        <img className='rounded-lg' src={rectImg} alt={item.name} />
                                    </div>

                                    <p className='text-sm pl-2'>{item.name}</p>
                                </div>

                            </Col>
                            <Col md={{ span: 5 }}>
                                <Row className="w-fit h-fit flex justify-center items-center rounded-md ">
                                    <Col md={{ span: 8 }}>{item.quantity}</Col>
                                    <Col md={{ span: 8 }}>
                                        <span>
                                            <CaretUpFilled
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    increaseItem(item);
                                                }}
                                            />
                                        </span>
                                        <span className='mb-2'>
                                            <CaretDownFilled
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    decreaseItem(item);
                                                }}
                                            />
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{ span: 5 }}>
                                <Button onClick={() => removeFromCart(item.name)} className='bg-white border-0 hover:bg-red-200 rounded-full'>
                                    <DeleteFilled className='text-red-700' />
                                </Button>
                            </Col>
                        </Row>
                        <Divider className='mb-1' />
                    </div>
                ))}
            </ul>
            <Row>
                <Col md={{ span: 17 }} className='text-gray-700 font-medium'>
                    Subtotal
                </Col>
                <Col md={{ span: 3 }} className='text-blue-400/100' >
                    1.00DTSUs
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={{ span: 8 }} className='text-gray-700 font-medium'>
                    New Payment
                </Col>
                <Col md={{ span: 15 }} className='text-blue-400/100'>
                    No,inclusive in your package
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col md={{ span: 17 }} className='text-gray-700 font-medium'>
                    Total Unites Consumed
                </Col>
                <Col md={{ span: 3 }} className='text-blue-400/100'>
                    1.00DTSUs
                </Col>
            </Row>
            <Row>
                <Button onClick={handleShowAlert} type='primary' className='w-full mt-6 rounded-2xl text-white bg-blue-500 px-4'>
                    Checkout
                </Button>
            </Row>
            <Row>
                <Button type='default'  className='w-full mt-4 rounded-2xl text-blue-400 px-4'>
                    Back To Run Information
                </Button>
            </Row>
            <Row >
                <img onClick={handleShowMessage} className='ml-auto mt-2 cursor-pointer' src={giftImg} alt='gift_img' />
            </Row>
            {
                showCartAlert && 
                <Alert className='mt-20' message='Some requests can take a week or more to be delivered and may be subject to dependency resolutions' type='info'></Alert>
            }
            {
                showMesaage && 
                <Alert className='mt-20' message='Your have made a great chooseLets Run and be ready for a surprise' type='warning'></Alert>
            }
        </>
    );
}

export default CartContent