import Link from "next/link";
import Logo from "./logo";
import { FaAppStoreIos } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
import { FaAndroid } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center pl-5 ">
            
            <a href="#"><img className="m-1" src="/images/kiblegah_onlyLogo.webp" alt="Kıblegâh Logo" style={{ width: '40px' }}  /> </a>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-4">
            <li className="" >
              <Link 
                href="/"
                className="  bg-transparent text-gray-800  hover:text-yellow-500 flex gap-3 p-1"
              >
                <FaAppStoreIos className="text-2xl "/>
                IOS
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="bg-transparent text-gray-800  hover:text-yellow-500 flex gap-3 p-1 pr-5"
              >
                
                <FaAndroid className="text-2xl " />
               
                Android
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
