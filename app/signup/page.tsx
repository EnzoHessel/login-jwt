import HomeImage from "../../components/HomeImage";
import Signup from "./_components/Signup";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Signup />
      <HomeImage />
    </main>
  );
}