import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions = {
 
    adapter: PrismaAdapter(prisma),
    session:{
        strategy:'jwt'
    },

    
    // Here Add all the providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
     
    ],
  }
  



const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}