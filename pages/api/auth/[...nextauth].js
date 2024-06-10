import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET 
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
}

export default NextAuth(authOptions)



{/**
GOOGLE_CLIENT_ID = 181531902204-mg2m06oik3f3nsd0e9b2gulfki1h78vh.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET =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


GITHUB_CLIENT_ID = 2ddfe08044181172ce77
GITHUB_CLIENT_SECRET = 8fac8118187e2734c08981527e2d42a7f44c5ed2
  */}