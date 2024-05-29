
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Link className="my-10 text-center p-2 bg-blue-600" href={'/helloworld'}>Hello World</Link>
    </main>
  );
}
