"use client"

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <main className="flex justify-center items-center min-h-screen gap-4">
      <Button onClick={handleSignup}>
        Signup
      </Button>
      <Button onClick={handleLogin}>
        Login
      </Button>
    </main>
  );
}
