import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 bg-white px-10 py-5 text-black text-2xl">
      <Image
        src="/cm.png"
        alt="cm logo"
        width={910}
        height={567}
        className="h-14 object-contain w-fit cursor-pointer"
      />
      <div className="flex justify-end items-center space-x-10">
        <Link href="#" className="cursor-pointer">
          Proyectos
        </Link>
        <Link href="#" className="cursor-pointer">
          Sobre mí
        </Link>
        <Link
          href="#"
          className="cursor-pointer bg-gray-caro text-white p-3 rounded-xl"
        >
          Contacto
        </Link>
        <Image
          src="/playground.png"
          alt="playground logo"
          width={1024}
          height={250}
          className="h-14 w-fit object-contain cursor-pointer"
        />
      </div>
    </nav>
  );
}
