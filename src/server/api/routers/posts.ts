import { z } from "zod";
import { TRPCError } from "@trpc/server";
import axios from "axios";


import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const post = await axios.get(
      process.env.CMS_API + '/api/posts?populate=*'
    );
    let response = post.data.data;

    if (!response) throw new TRPCError({ code: "NOT_FOUND" });
    return response;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await axios.get(
        process.env.CMS_API + '/api/posts/${input.id}?populate=*'
      );
      let response = post.data.data;

      if (!response) throw new TRPCError({ code: "NOT_FOUND" });
      return response;
  }),

  getPostsByTag: publicProcedure
    .input(z.object({ tag: z.string() }))
    .query(async ({ ctx, input }) => {
      const posts = await ctx.prisma.post.findMany({
        where: { 
          tag: input.tag 
        },
      });

      if (!posts) throw new TRPCError({ code: "NOT_FOUND" });

      return posts;
  }),
});
