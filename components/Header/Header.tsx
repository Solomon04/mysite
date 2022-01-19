import {FunctionComponent} from "react";
import Link from "next/link"
import HeaderItem from "./HeaderItem";

const Header: FunctionComponent = () => {
    const items = [
        {
            name: 'About',
            href: '#'
        },
        {
            name: 'Portfolio',
            href: '#'
        },
        {
            name: 'Work',
            href: '#'
        },
        {
            name: 'Blog',
            href: '/blog'
        }
    ]

    return (
        <>
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <a className="text-green-500 text-3xl font-extrabold">SOLOCODES</a>
                </Link>
                <div className="space-x-5">
                    {
                        items.map(item => (
                            <HeaderItem key={item.name} name={item.name} href={item.href}/>
                        ))
                    }
                </div>
            </nav>
        </>
    )
};

export default Header;
