import {FunctionComponent} from "react";

const Footer: FunctionComponent = () => {
    const social = [
        {
            name: 'Github',
            href: 'https://github.com/Solomon04',
            icon: "/icons/github.svg"
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/solocodes_me',
            icon: '/icons/twitter.svg'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/solomon-antoine-a52393152/',
            icon: '/icons/linkedin.svg'
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/c/Icodestuff',
            icon: '/icons/youtube.svg'
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/s_.o_l_o_m_o_n/',
            icon: '/icons/instagram.svg'
        }
    ]

    return (
        <footer className="bottom-0">
            <div className="mt-8 flex items-center justify-center space-x-6">
                {
                    social.map(s => (
                        <a key={s.name} href={s.href}>
                            <img src={s.icon} className="h-6 w-6"/>
                        </a>
                    ))
                }
            </div>
            <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                © 2022 Solomon
            </div>
        </footer>
    )
}

export default Footer;
