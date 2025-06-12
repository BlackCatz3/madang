This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Real-time Order Status

The backend updates an order row in Supabase using `PUT /order/:id/status`. Supabase Realtime broadcasts any updates to subscribed clients. The frontend listens for `UPDATE` events on the `order` table and updates the timeline accordingly.

## Auth & Role

Users sign up using their email and choose either the `customer` or `partner` role. Supabase sends an OTP to the email address.
After confirming the OTP, a row is inserted into the `profile` table storing the role. On every request the client can fetch `/me` or query the `profile` table to know the role.

```ts
// frontend example
const role = await getRole(); // queries profile table of logged in user

// backend example
const role = await getUserRole(token);
```

The `partner` dashboard page checks this role on mount and redirects to `/login` when the role does not match.

## Style Guide

A dedicated `/style-guide` page demonstrates the app colors, font scale and button styles.
It also includes a toggle for light/dark theme with a smooth crossfade animation.
