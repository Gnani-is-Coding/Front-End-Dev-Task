import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
   
    GoogleProvider({
      clientId: '181531902204-mg2m06oik3f3nsd0e9b2gulfki1h78vh.apps.googleusercontent.com',
      clientSecret: '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' 
    }),
    GithubProvider({
      clientId: '2ddfe08044181172ce77',
      clientSecret: '8fac8118187e2734c08981527e2d42a7f44c5ed2',
    })
  ],
}

export default NextAuth(authOptions)



