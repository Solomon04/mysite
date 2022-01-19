import {FunctionComponent} from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useRouter } from 'next/router'


interface TabItemProps {
    active: boolean
}

const HeaderTab: FunctionComponent = () => {
    const router = useRouter();
    const tabs = [
        {
            name: 'Home',
            href: '/'
        },
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
    ];

    const TabContainer = tw.div`flex items-center bg-gray-100 rounded-full w-auto py-0.5 px-2 space-x-1`;

    // @ts-ignore
    const TabItem = tw.a<TabItemProps>`
        ${(p) => (p.active ? "bg-white" : "hover:text-gray-500")}
        inline-flex text-gray-900 rounded-full py-1 px-4 text-sm font-medium
    `;

    return (
        <TabContainer>
            {
                tabs.map(tab => (
                    <Link key={tab.name} href={tab.href} passHref={true}>
                        <TabItem active={tab.href === router.pathname}>{tab.name}</TabItem>
                    </Link>
                ))
            }
        </TabContainer>
    );
};

export default HeaderTab;
