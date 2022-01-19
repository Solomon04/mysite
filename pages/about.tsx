import {NextPage} from "next";
import Head from "next/head";
import Header from "../components/Header";

const About: NextPage = () => {
    const title = 'SoloCodes | About';
    const description = 'About Me.'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <div className="min-h-screen">
                <main className="max-w-5xl mx-auto relative">
                    <Header/>
                    <div className="h-full py-48 max-w-2xl mx-auto flex items-center justify-center">
                        Coming Soon
                    </div>
                </main>
            </div>
        </>
    );
};

export default About;
