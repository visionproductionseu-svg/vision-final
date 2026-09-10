import fs from "node:fs";
import path from "node:path";

import VisionScripts from "./VisionScripts";
import ChatWidget from "./ChatWidget";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const filePath = path.join(process.cwd(), "app", "page-content.html");

  const html = fs
    .readFileSync(filePath, "utf8")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");

  return (
    <>
      <Navbar active="home" />

      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <VisionScripts />
      <ChatWidget />
      <Footer />
    </>
  );
}