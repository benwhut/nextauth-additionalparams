## Next-Auth read additional parameters sample code

This is a simple Next Auth project that uses Postgresql and Nodemailer to illustrate the issue of not being able to read additional parameters passed from `signIn()` to `/api/auth/[...nextauth].js`.

According to [Next Auth docs](https://next-auth.js.org/getting-started/client#additional-parameters), I can pass additional parameters to the `/authorize` endpoint through the third argument of `signIn()`.

The docs show two examples:

```javascript
signIn("identity-server4", null, { prompt: "login" }) // always ask the user to re-authenticate
signIn("auth0", null, { login_hint: "info@example.com" }) // hints the e-mail address to the provider
```

However, there is no full working example and I'm unable to read any additional parameters that I've added in /api/auth/[...nextauth].js. How do you read these additional parameters in, for example, the signIn() callback?

This question was originally asked on [stackoverflow](https://stackoverflow.com/questions/73793681/how-to-read-additional-parameters-in-nextauth-signin-callback) and [next-auth github](https://github.com/nextauthjs/next-auth/discussions/5389).

## Getting Started

1) Fork or download this source code
2) `yarn install`
3) add .env file. Add in your postgresql URL and mail server settings. Use the .env-example as a template.
4) `yarn prisma migrate dev`
5) `yarn prisma generate`
6) run the dev server:

```bash
npm run dev
# or
yarn dev
```

7) Open [http://localhost:3000](http://localhost:3000) with your browser and enter an email address to see the output result on the server side.

The `signIn() callback` output should look like this:

```javascript
User: {
  user: { email: 'user@domain.com', id: 'user@domain.com' },
  account: {
    providerAccountId: 'user@domain.com',
    userId: 'user@domain.com',
    type: 'email',
    provider: 'email'
  },
  email: { verificationRequest: true }
}
Account undefined
Profile undefined
Email undefined
Credentials undefined
```

As you can see, the additional parameter `{addedParam: "My added parameter"}` doesn't show up in any of the objects. How do I read this added parameter in `/api/auth/[...nextauth].js`?

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
