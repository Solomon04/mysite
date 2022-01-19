import {Client} from "@notionhq/client";
import {BlogPost} from "../@types/schema";
import {NotionToMarkdown} from "notion-to-md";

export default class NotionService {
    client: Client;
    n2m: NotionToMarkdown;
    constructor() {
        this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
        this.n2m = new NotionToMarkdown({ notionClient: this.client });
    }


    async getPublishedBlogPosts(): Promise<BlogPost[]> {
        const database = 'ea2e1b31c89e4c4cb78681d984240702';
        // list of blog posts
        const response = await this.client.databases.query({
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
        return response.results.map((res: any) => {
            return this.convertPageToPost(res);
        });
    }

    async getSingleBlogPost(slug: string) {
        const database = 'ea2e1b31c89e4c4cb78681d984240702';
        // list of blog posts
        const response = await this.client.databases.query({
            database_id: database,
            filter: {
                property: 'Slug',
                formula: {
                    text: {
                        equals: slug // slug
                    }
                },
                // add option for tags in the future
            },
            sorts: [
                {
                    property: 'Updated',
                    direction: 'descending'
                }
            ]
        });

        if (response.results[0]) {
            // grab page from notion
            const page = response.results[0];

            const mdBlocks = await this.n2m.pageToMarkdown(page.id)
            const markdown = this.n2m.toMarkdownString(mdBlocks);
            const post = this.convertPageToPost(page)

            return {
                post,
                markdown
            }
        }


        return
    }

    convertPageToPost(page: any): BlogPost {
        let cover = page.cover
        if (cover.type === 'file') {
            cover = page.cover.file.url
        } else {
            cover = page.cover.external.url
        }

        return {
            id: page.id,
            cover: cover,
            title: page.properties.Name.title[0].plain_text,
            tags: page.properties.Tags.multi_select,
            description: page.properties.Description.rich_text[0].plain_text,
            date: page.properties.Updated.last_edited_time,
            slug: page.properties.Slug.formula.string
        }
    }
}
