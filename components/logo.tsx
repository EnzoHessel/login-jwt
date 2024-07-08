import Image from 'next/image';
import React from 'react'

const Logo = ({ loginText }: any) => {
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center gap-3 mb-8">
          <Image src="Icons/logo.svg" alt="logo" width={50} height={60} />
          <p className="text-4xl font-bold">MoveIt!</p>
        </div>
        <p className="font-bold text-xl">{loginText}</p>
      </div>
    </div>
  )
}

export default Logo;
