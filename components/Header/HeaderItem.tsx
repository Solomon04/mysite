import {FunctionComponent} from "react";
import Link from "next/link"

type ItemProps = {
    name: string
    href: string
}

const HeaderItem: FunctionComponent<ItemProps> = ({name, href}) => {
    return (
        <Link href={href}>
            <a className="text-gray-400 hover:text-white text-lg font-thin uppercase">{name}</a>
        </Link>
    );
};

export default HeaderItem;
