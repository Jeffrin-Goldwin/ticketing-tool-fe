import type { NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "your-cool-username" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials) {
                const user = {id:"1", name: "Jeff", password: "Password"}

                if(credentials?.username === user.name && credentials?.password === user.name){
                    return user
                }
                else {
                    return null
                }
              }
        })
    ],
}