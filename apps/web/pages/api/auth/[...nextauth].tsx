import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: ({ token, account }) => {
      if (account && account.id_token) token['id_token'] = account.id_token;
      return token;
    },
    session: ({ session, token }) => {
      if (token['id_token']) session['id_token'] = token['id_token'];
      return session;
    },
    redirect: () => '/',
  },
});
