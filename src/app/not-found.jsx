import Link from "next/link";

function NotFound() {
  return (
    <section className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold block">404</h1>
      <p className="text-slate-300 my-5 text-3xl">
        <strong>Page not found :(</strong>
      </p>
      <p className=" text-blue-500 my-5 text-3xl">
        <Link href="/"><strong>Go to Home</strong></Link>
      </p>
    </section>
  );
}

export default NotFound;
