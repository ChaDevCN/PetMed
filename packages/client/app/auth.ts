
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import fetchData from '@/lib/fetchData';

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/login',
    },
    providers: [
        Credentials({
            authorize: async (credentials) => {
                const { username, password } = credentials
                const data = await fetch('http://localhost:8082/user/login', {
                    method: 'post',
                    body: JSON.stringify({
                        username,
                        password
                    })
                }).then(res => res.json())
                if (data.code === 0) {
                    return null
                }

                return { id: data.code }
                // const res= await fetch({
                //     url: '/user/login',
                //     method: 'post',
                //     body:{
                //         data: { username, password }
                //     }
                // })
                // if(code === 0){
                //     return {
                //         id: token
                //     }
                // }else{
                //     return null
                // }

            }
        }),
    ],
    callbacks: {
        jwt: async () => {

            return {
                username: 'liuchang'
            }
        },
        session: async ({ session, token }) => {
            if (session.user && token?.sub) {
                session.user.token = token.sub
            }
            return session
        }
    }
});
