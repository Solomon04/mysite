import {GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage} from "next";
import {Client} from "@notionhq/client";
import BlogCard from "../components/Card";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BlogPost} from "../@types/schema";

export const getStaticProps: GetStaticProps = async (context) => {
    const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

    const database = 'ea2e1b31c89e4c4cb78681d984240702';
    // list of blog posts
    const response = await client.databases.query({
        database_id: database,
        filter: {
            property: 'Published',
            checkbox: {
                equals: true
            }
            // add option for tags in the future
        },
        sorts: [
            {
                property: 'Updated',
                direction: 'descending'
            }
        ]
    });

    // pages
    const posts: BlogPost[] = response.results.map((res: any) => {
        let cover = res.cover
        if (cover.type === 'file') {
            cover = res.cover.file.url
        } else {
            cover = res.cover.external.url
        }

        return {
            id: res.id,
            cover: cover,
            title: res.properties.Name.title[0].plain_text,
            tags: res.properties.Tags.multi_select,
            description: res.properties.Description.rich_text[0].plain_text,
            date: res.properties.Updated.last_edited_time
        }
    })


    return {
        props: {
            posts
        },
    }
}

const Blog = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const title = 'SoloCodes | Blog';
    const description = 'Welcome to my blog where I write coding tutorials.'

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
                    <div className="h-full pt-4 pb-16 mx-auto">
                        <div className="flex items-center justify-center">
                            <h1 className="font-extrabold text-4xl text-white">Blog</h1>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                            {posts.map((post: BlogPost) => (
                                <BlogCard key={post.id} post={post}/>
                            ))}
                        </div>
                    </div>
                    <Footer/>
                </main>
            </div>
        </>
    )
};

export default Blog;
