import type {NextPage} from 'next'
import Head from 'next/head'
import Footer from "../components/Footer";
import HomeArea from "../components/HomeArea";
import Header from '../components/Header';

const Home: NextPage = () => {
    const title = 'SoloCodes';
    const description = 'Writing code and starting companies.'

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
                    <HomeArea/>
                    <Footer/>
                </main>
            </div>

        </>
    )
}

export default Home
