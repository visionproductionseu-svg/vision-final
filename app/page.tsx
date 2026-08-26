import fs from "node:fs";
import path from "node:path";
import VisionScripts from "./VisionScripts";

export default function Home() {
  const filePath = path.join(process.cwd(), "index.html");
  const html = fs.readFileSync(filePath, "utf8");

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  const body = bodyMatch
    ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, "")
    : "";

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <VisionScripts />
    </>
  );
}