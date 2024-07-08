import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='hidden flex-col items-center justify-center bg-gray-200 w-full sm:flex'>
      <h2 className='font-medium text-4xl'>You should, MoveIt!</h2>
      <Image src="/Icons/Delivery.svg" alt="delivery" width={596} height={534}/>
    </div>
  )
}

export default HomePage;
