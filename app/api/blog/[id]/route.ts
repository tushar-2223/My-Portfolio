import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_TOKEN,
  });
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const notion = getNotionClient();
    console.log("Fetching page blocks for:", id);

    const blocks = await notion.blocks.children.list({
      block_id: id,
    });

    console.log("Received", blocks.results.length, "blocks");
    return NextResponse.json(blocks.results);
  } catch (error: any) {
    console.error("Notion Block Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch blog content" },
      { status: 500 }
    );
  }
}

