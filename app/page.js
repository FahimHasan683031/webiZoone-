import Link from "next/link";
import BackgroundAnimationComponent from "./components/common";
import { error } from "console";

export default function Home() {

  return (
    <main className="">
      <Link className="my-10 text-center p-2 bg-blue-600" href={"/helloworld"}>
        Hello World
      </Link>
      <div className="absolute top-0 left-0 z-10">
        <BackgroundAnimationComponent />
      </div>
    </main>
  );
}
