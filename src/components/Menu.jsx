import Link from "next/link";

export default function Menu() {
  return (
    <nav className=" flex gap-4">
      <Link href="/" prefetch={false}>
        Home
      </Link>
      <Link href="/dogs/henry" prefetch={false}>
        henry
      </Link>
      <Link href="/dogs/pete" prefetch={false}>
        pete
      </Link>
      <Link href="/dogs/tommi" prefetch={false}>
        tommi
      </Link>
    </nav>
  );
}
