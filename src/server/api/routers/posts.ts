import { z } from "zod";
import { TRPCError } from "@trpc/server";


import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 20,
      where: {
        home: true
      }
    });
    return posts;
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });

      if (!post) throw new TRPCError({ code: "NOT_FOUND" });

      return post;
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
