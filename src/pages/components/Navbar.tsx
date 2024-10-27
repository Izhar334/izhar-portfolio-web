import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-indigo-500 body-font font-serif">
      <div className="container mx-auto gap-4 justify-center flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          {/* <img
            className="w-10 h-10 text-white p-0 bg-indigo-500 rounded-full"
            src="https://img.freepik.com/premium-vector/alphabet-m-logo_662583-214.jpg"
            alt="logo image" 
            width={24} height={24}
          /> */}
          <Image
            className="h-12 w-12 rounded-md"
            src="/images/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
          <span className="ml-3 text-xl justify-normal">Izhar Ahmed</span>

          <ul>
            <li className="space-x-4 px-6">
              <Link className="hover:text-slate-800" href="/">
                Home
              </Link>
              <Link className="hover:text-slate-800" href="/About">
                About
              </Link>
              <Link className="hover:text-slate-800" href="/Projects">
                Projects
              </Link>
              <Link className="hover:text-slate-800" href="/Skills">
                Skills
              </Link>
              <Link className="hover:text-slate-800" href="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="inline-flex items-center bg-black border-0 py-1 px-3 rounded-full focus:outline-none hover:bg-white text-base mt-4 md:mt-0">
          <Link href="/Resume">View Resume</Link>
        </button>
      </div>
    </header>
  );
}
