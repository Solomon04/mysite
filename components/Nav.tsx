import {FunctionComponent} from "react";
import Link from "next/link";
import HeaderTab from "./HeaderTab";

const Nav: FunctionComponent = () => {
    return (
        <div className="flex items-center justify-center md:justify-between py-8 px-12 md:px-0">
            <Link href="/">
                <a className="hidden md:block text-green-500 text-sm font-extrabold">SOLOCODES</a>
            </Link>

            <div className="flex">
                <HeaderTab/>
            </div>


            <Link href="solomon@icodestuff.io">
                <a className="hidden md:block text-sm font-medium">Contact</a>
            </Link>
        </div>
    )
};

export default Nav;
