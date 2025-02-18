import Link from "next/link";

export function Navbar() {
  return (
    <div className="my-12 container flex flex-row items-center justify-between">
      <Link
        href="/"
        className="text-center text-2xl bg-black text-white p-2 rounded"
      >
        {" "}
        Home
      </Link>
      <Link
        href="/taintUniqueValue"
        className="text-center text-2xl bg-black text-white p-2 rounded "
      >
        {" "}
        Protected Page by taintUniqueValue{" "}
      </Link>

      <Link
        href="/taintObjectReference"
        className="text-center text-2xl bg-black text-white p-2 rounded "
      >
        {" "}
        Protected Page by taintObjectReference
      </Link>
    </div>
  );
}
