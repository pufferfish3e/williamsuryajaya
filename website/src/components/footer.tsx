import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 flex flex-row justify-left items-center w-screen h-24 bg-black/[.4] pl-12 gap-4 z-40">
            <h2 className="text-xl flex flex-row justify-center items-center text-green-300 opacity-100 font-semibold z-50"><FaPhoneAlt className="text-xl mr-1 text-green-800 opacity-100"/>(+65) 83828512</h2>
            <h2 className="text-xl flex flex-row justify-center items-center text-green-300 opacity-100 font-semibold z-50"><MdEmail className="text-2xl mr-1 text-green-800 opacity-100" />sunvicstudio@gmail.com</h2>
        </div>
    )
}