import CartImg from '../images/Path 4221.png'

const EmptyCart = () => {
    return (
      <div className='flex flex-col justify-center items-center mx-auto h-full' >
        <img src={CartImg} alt='cart_img'></img>
        <p className='mt-5 text-lg font-semibold text-gray-700'>Your run cart is empty!</p>
        <p className='text-gray-500'>start add your requests here</p>
      </div>
    );
  }

export default EmptyCart;