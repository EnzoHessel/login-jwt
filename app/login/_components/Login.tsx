import React from 'react'
import LoginForm from './LoginForm'
import Logo from '@/components/logo';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center shadow-custom sm:min-w-[480px]'>
      <Logo loginText="Login into your account"/>
      <LoginForm />
      <div className="flex items-center justify-center gap-4 max-w-[480px]">
        <div className="bg-gray-300 w-36 h-1 rounded-full"></div>
        <div><p>Or</p></div>
        <div className="bg-gray-300 w-36 h-1 rounded-full"></div>
      </div>
      <Link href="/signup" className="mt-3 min-w-[340px] flex justify-center py-3 px-4 border-2 border-purple-700 rounded-md shadow-sm text-sm font-medium text-purple-700 hover:bg-gray-100">
        Signup Now
      </Link>
    </div>
  )
}

export default Login
