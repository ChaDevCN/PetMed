
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
    secret:'123123213213',
    pages: {
        signIn: '/login',
    },
    providers: [
        Credentials({
            authorize: async (credentials) => {
                const data = await fetch('http://localhost:8082/user/login', {
                    method: 'post',
                    body: JSON.stringify(credentials),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())

                if (data?.data.code !== 1) {

                    return null

                }

                return { id: data.data.token }
            }
        }),
    ],
    callbacks: {
        jwt: async ({ token, ...rest }) => {
            const user = await fetch(
                'http://localhost:8082/user/auth',
                {
                    headers: {
                        'Authorization': `Bearer ${token.sub}`
                    }
                }
            ).then(res => res.json())
            
            return {
                ...user.data,
                ...token
            }
        },
        session: async ({ session, token }) => {

            if (session.user && token?.sub) {
                (session.user as any).token = token.sub
            }
            return session
        },
    }
});
