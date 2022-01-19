import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../@types/schema";
import slugify from "slugify";
import dayjs from 'dayjs'

type CardProps = {
    post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<CardProps> = ({post}) => {
    const Tag = (tag: any) => {
        const className = `bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg`;
        return (
            <span key={tag.id} className={className}>
                #{tag.name}
            </span>
        )
    }

    const slug = slugify(`${post.title.toLowerCase()} ${post.id}`)

    return (
        <Link href={`/post/${slug}`}>
            <a className="transition duration-300 hover:scale-105">
                <div key={post.title} className="flex flex-col rounded-xl shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img className="h-64 w-full object-fit" src={post.cover} alt="" />
                    </div>
                    <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
                        <div className="flex-1">
                            <span className="block mt-2">
                                <h4 className="text-xs font-medium text-gray-600">{dayjs(post.date).format('LL')}</h4>
                            </span>
                            <span className="block mt-2">
                                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                            </span>

                            <span className="block mt-2">
                                <p className="text-sm text-gray-600">{post.description}</p>
                            </span>

                            <span className="block mt-2 space-x-4">
                                {
                                    post.tags.map(tag => (
                                        <Tag key={tag.id} color={tag.color} id={tag.id} name={tag.name}/>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default BlogCard;
