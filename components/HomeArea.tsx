import Link from "next/link";
import {FunctionComponent} from "react";
import tw from "tailwind-styled-components";

interface BlockProps {
    margin: boolean
}

interface HomeAreaProps {
    avatar: string
    name: string
    title: string
    description: string
}

const HomeArea: FunctionComponent = (props) => {
    const Container = tw.div`h-full py-32 max-w-2xl mx-auto`
    // @ts-ignore
    const Block = tw.div<BlockProps>`flex items-center justify-center 
    ${(p) => (p.margin ? "my-8" : "my-0")}`
    const Avatar = tw.img`rounded-full h-32 w-auto`
    const MoreButton = tw.a`flex items-center justify-center bg-gradient-to-r 
    from-gray-700 via-gray-900 to-black text-white text-sm font-semibold w-48 px-5 py-4 rounded-lg 
    hover:animate-pulse transition-300
    `;
    const Name = tw.h1`font-bold text-3xl md:text-5xl text-gray-900`;
    const Title = tw.h2`text-gray-500 text-xl`;
    const Description = tw.p`text-gray-600 text-base tracking-tight text-center`

    return (
        <>
            <Container>

                <Block margin={false}>
                    <Avatar src="/photo.jpeg" alt={"Solomon"}/>
                </Block>

                <Block margin={true}>
                    <Name>Solomon Antoine</Name>
                </Block>

                <Block margin={true}>
                    <Title>Serial Entrepreneur 🧱 / Software Engineer 👨🏿‍💻</Title>
                </Block>

                <Block margin={true}>
                    <Description>
                        I am a Full Stack developer with experience in DevOps, Backend, Frontend and Mobile Development.
                        In my free time, you can find me working on <a className="font-semibold text-black">Icodestuff</a> and
                        <a className="font-semibold text-black"> HoopSpots.</a>
                    </Description>
                </Block>

                <Block margin={true}>
                    <Link passHref={true} href='/about'>
                        <MoreButton>More About Me</MoreButton>
                    </Link>
                </Block>
            </Container>
        </>
    );
};

export default HomeArea;
