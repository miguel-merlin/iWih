import { v } from "convex/values";
import { action } from "./_generated/server";
import axios from "axios";

export const fetchPapers = action({
  args: { query: v.string() },
  handler: async (_, args) => {
    const arxivBaseURL = `http://export.arxiv.org/api/query?search_query=all${args.query}&start=0&max_results=10`;
    const data = await axios
      .get(arxivBaseURL)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
    return data;
  },
});
