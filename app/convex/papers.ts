import { query, mutation } from "./_generated/server";

export const list = query(async (ctx) => {
  return await ctx.db.query("papers").collect();
});

export const send = mutation(async (ctx, { body, author }) => {
  const message = { body, author };
  await ctx.db.insert("papers", message);
});

export const sendPaper = mutation(async (ctx, { storageId, author }) => {
  const message = { body: storageId, author, format: "pdf" };
  await ctx.db.insert("papers", message);
});
