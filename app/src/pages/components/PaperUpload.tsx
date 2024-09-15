import { FormEvent, useRef, useState } from "react";

export default function PaperUpload() {
  const pdfInput = useRef<HTMLInputElement>(null);
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const [paperTitle, setPaperTitle] = useState<string>("");
  const [paperAuthor, setPaperAuthor] = useState<string>("");

  async function handleSendPaper(event: FormEvent) {
    event.preventDefault();
    console.log("In handle submit");
    const uploadPaperURL = new URL(`${convexSiteUrl}/api/upload-paper`);
    uploadPaperURL.searchParams.set("title", paperTitle);
    uploadPaperURL.searchParams.set("author", paperAuthor);
    await fetch(uploadPaperURL, {
      method: "POST",
      headers: { "Content-Type": selectedPdf!.type },
      body: selectedPdf,
    });
    setSelectedPdf(null);
    pdfInput.current!.value = "";
    console.log("Finished");
  }
  return (
    <>
      <main>
        <form onSubmit={handleSendPaper}>
          <input
            type="text"
            placeholder="Paper Author"
            onChange={(event) => setPaperAuthor(event.target.value)}
          />
          <input
            type="text"
            placeholder="Paper Title"
            onChange={(evet) => setPaperTitle(evet.target.value)}
          />
          <input
            type="file"
            ref={pdfInput}
            onChange={(event) => setSelectedPdf(event.target.files![0])}
          />
          <input type="submit" value="Submit" disabled={selectedPdf == null} />
        </form>
      </main>
    </>
  );
}

const convexSiteUrl = import.meta.env.VITE_CONVEX_SITE_URL;
