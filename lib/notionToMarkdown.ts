export function notionBlocksToMarkdown(blocks: any[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return block.paragraph.rich_text.map((t: any) => t.plain_text).join("");
        case "heading_1":
          return `# ${block.heading_1.rich_text.map((t: any) => t.plain_text).join("")}`;
        case "heading_2":
          return `## ${block.heading_2.rich_text.map((t: any) => t.plain_text).join("")}`;
        case "heading_3":
          return `### ${block.heading_3.rich_text.map((t: any) => t.plain_text).join("")}`;
        case "bulleted_list_item":
          return `* ${block.bulleted_list_item.rich_text.map((t: any) => t.plain_text).join("")}`;
        case "numbered_list_item":
          return `1. ${block.numbered_list_item.rich_text.map((t: any) => t.plain_text).join("")}`;
        case "code":
          return `\`\`\`${block.code.language}\n${block.code.rich_text[0]?.plain_text}\n\`\`\``;
        case "image":
          const url = block.image.type === "external" ? block.image.external.url : block.image.file.url;
          return `![Image](${url})`;
        default:
          return "";
      }
    })
    .join("\n\n");
}