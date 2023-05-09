import React, { useContext } from 'react'
import { Context } from '../context/CartContext';
import { Alert, Button, Col, Divider, Row } from 'antd';
import rectImg from '../images/Rectangle 32.png';
import cloudImg from '../images/cloud.png';

const KitchenContent = () => {
    const { cart, showKitchenAlert, setShowKitchenAlert } = useContext(Context);

    const handleShowAlert = () => {
        setShowKitchenAlert(true);
        setTimeout(() => {
            setShowKitchenAlert(false);
         }, 2000)
    }

    return (
        <>
            <Row className='pb-2'>
                <Col className='font-semibold' md={{ span: 12 }} >
                    Request
                </Col>
                <Col className='font-semibold' md={{ span: 5 }}>Status</Col>
                <Col className='font-semibold' md={{ span: 5 }}>O/P Link</Col>
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
                            <Col md={{ span: 5 }} className='mt-2'>
                                <Row>
                                    <div className='bg-red-100 w-4 h-4 py-3 px-3 rounded-lg'>
                                        <div className='bg-red-500 w-3 h-3 absolute status_icon  rounded-full'>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={{ span: 5 }}>
                                <Button className='bg-white border-0'>
                                    <img src={cloudImg} alt='cloud_img' />
                                </Button>
                            </Col>
                        </Row>
                        <Divider className='mb-1' />
                    </div>
                ))}
            </ul>
            <Row>
                <Col md={{ span: 12 }} className='text-gray-700 font-medium'>
                    Units Under Processing
                </Col>
                <Col md={{ span: 12 }} className='text-blue-400/100 pl-14' >
                    12.00 DTSUs
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={{ span: 12 }} className='text-gray-700 font-medium'>
                    Units Completed
                </Col>
                <Col md={{ span: 12 }} className='text-blue-400/100 pl-14'>
                    12.00 DTSUs
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col md={{ span: 12 }} className='text-gray-700 font-medium'>
                    Total Unites Consumed
                </Col>
                <Col md={{ span: 12 }} className='text-blue-400/100 pl-14'>
                    12.00 DTSUs
                </Col>
            </Row>
            <Row>
                <Button onClick={handleShowAlert} type='primary' className='w-full mt-6 rounded-2xl text-white bg-blue-500 px-4'>
                    Refresh Status
                </Button>
            </Row>
            <Row>
                <Button type='default' className='w-full mt-4 rounded-2xl text-blue-400 px-4'>
                    Back To Your Dashboard
                </Button>
            </Row>
            {
                showKitchenAlert && 
                <Alert className='mt-20' message='Some requests can take a week or more to be delivered and may be subject to dependency resolutions' type='info'></Alert>
            }
        </>
    );
}

export default KitchenContent