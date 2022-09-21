## Next-Auth read additional parameters sample code

This is a simple Next Auth project that uses Postgresql and Nodemailer to illustrate the issue of not being able to read additional parameters passed from `signIn()` to `/api/auth/[...nextauth].js`.

According to [Next Auth docs](https://next-auth.js.org/getting-started/client#additional-parameters), I can pass additional parameters to the `/authorize` endpoint through the third argument of `signIn()`.

The docs show two examples:

```javascript
signIn("identity-server4", null, { prompt: "login" }) // always ask the user to re-authenticate
signIn("auth0", null, { login_hint: "info@example.com" }) // hints the e-mail address to the provider
```

However, there is no full working example and I'm unable to read any additional parameters that I've added in `/api/auth/[...nextauth].js`. 

I added this additional parameter to this code:

```javascript
signIn('email', 
  {email, callbackUrl: '/dashboard', redirect: false}, 
  {addedParam: "My added parameter"}) // <- MY ADDITIONAL PARAMETER!
```

How do you read this additional parameter in, for example, the `signIn()` callback?

For full details, the original question was asked on [stackoverflow](https://stackoverflow.com/questions/73793681/how-to-read-additional-parameters-in-nextauth-signin-callback) and [next-auth github](https://github.com/nextauthjs/next-auth/discussions/5389).

## Getting Started

1) Fork or download this source code
2) `npm install` or `yarn` to install dependencies
3) add `.env` file. Add in your postgresql URL and mail server settings. Use the `.env-example` as a template.
4) `npx prisma migrate dev` or `yarn prisma migrate dev` to setup the postgresql database from `/prisma/prisma.schema`
5) `npx prisma generate` or `yarn prisma generate` to generate the prisma client
6) `npm run dev` or `yarn dev` to run a local dev server
7) Open [http://localhost:3000](http://localhost:3000) with your browser and enter an email address to see the output result on the server side.

The `signIn() callback` output on the server should look like this:

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
