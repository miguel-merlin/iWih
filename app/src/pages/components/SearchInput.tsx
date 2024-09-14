import { useState } from "react";
import axios from "axios";

export default function SearchInput() {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick();
  };

  const handleClick = async () => {
    const arxivBaseURL = `http://export.arxiv.org/api/query?search_query=all${query}&start=0&max_results=10`;
    try {
      const response = await axios.get(arxivBaseURL);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for papers"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input type="submit" value="Search" disabled={query.length === 0} />
      </form>
    </>
  );
}
