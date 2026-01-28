import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID!

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: "Status",
        status: { equals: "Done" },
      },
    })

    const page = response.results.find((p: any) => {
      const pageSlug =
        p.properties.Slug?.rich_text?.[0]?.plain_text ?? p.id
      return pageSlug === slug
    }) as any

    if (!page) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }

    const props = page.properties

    let coverImage = "/placeholder.svg"
    if (page.cover) {
      coverImage =
        page.cover.type === "external"
          ? page.cover.external.url
          : page.cover.file.url
    }

    const authorData = props.Author?.people?.[0] || page.created_by

    const post = {
      id: page.id,
      title: props.Name?.title?.[0]?.plain_text ?? "Untitled",
      slug,
      summary: props.Summary?.rich_text?.[0]?.plain_text ?? "",
      tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
      date: page.created_time,
      coverImage,
      author: {
        name: authorData?.name ?? "Tushar Pankhaniya",
        avatar: authorData?.avatar_url ?? null,
      },
    }

    // ✅ YOUR BLOCK FETCH (as requested)
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    })

    return NextResponse.json({
      post,
      blocks: blocks.results,
    })
  } catch (err: any) {
    console.error("Blog detail API error:", err)
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    )
  }
}
