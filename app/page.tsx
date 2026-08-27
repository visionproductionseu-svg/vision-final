import fs from "node:fs";
import path from "node:path";

import VisionScripts from "./VisionScripts";

export default function Home() {
  const filePath = path.join(process.cwd(), "app", "page-content.html");
  const html = fs.readFileSync(filePath, "utf8");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <VisionScripts />
    </>
  );
}