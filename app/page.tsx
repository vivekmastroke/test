import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Hello Vivek 🚀</h1>

      <p className="text-lg">My first Next.js app running on CodeSandbox</p>

      <Image src="/next.svg" alt="Next.js logo" width={120} height={30} />
    </div>
  );
}
