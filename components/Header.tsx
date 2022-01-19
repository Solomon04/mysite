import {FunctionComponent} from "react";
import Link from "next/link";
import HeaderTab from "./HeaderTab";

const Header: FunctionComponent = () => {
    return (
        <div className="flex items-center justify-center md:justify-between py-8 px-12 md:px-0">
            <Link href="/">
                <a className="hidden md:block text-green-500 text-sm font-extrabold">
                    <img className="h-8 w-auto" src="/solocodes.png" alt="logo"/>
                </a>
            </Link>

            <div className="flex">
                <HeaderTab/>
            </div>


            <Link href="mailto:solomon@icodestuff.io">
                <a className="hidden md:block text-sm font-medium">Contact</a>
            </Link>
        </div>
    )
};

export default Header;
