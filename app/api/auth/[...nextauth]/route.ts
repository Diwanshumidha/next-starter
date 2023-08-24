import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions:NextAuthOptions = {
    // @ts-expect-error
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },

    
    // Here Add all the providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
     
    ],
  }
  



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}