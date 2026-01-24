import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const blocks = await notion.blocks.children.list({
      block_id: id,
    })

    return NextResponse.json(blocks.results)
  } catch (error) {
    console.error("Notion Block Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog content" },
      { status: 500 }
    )
  }
}
