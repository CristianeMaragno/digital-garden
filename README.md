# How to develop

## Install dependencies
This project uses [npm](https://www.npmjs.com/) as it's package manager. To install dependencies, run:

```bash
npm install
``` 

## Connect to database
Make sure you have the planetscale [CLI installed](https://planetscale.com/features/cli)

Create your planetscale account and become part of the company organization.

Afterwards, log into your planetscale account using:
```bash
pscale auth login
```
This command will open a browser window to allow you to connect to planetscale. After this, you may connect to the development database. Replace <BRANCH> with the db branch name you want to connect to:
```bash
pscale connect digital-garden <BRANCH>
```

Prisma studio will serve as your primary database tool. You can open prisma studio in your browser with the following command:
```bash
npx prisma studio
```
To create/update model on the database
```bash
npx prisma db push
```

## Environment variables
Copy the .env.example file to a new file called .env on the project root and replace the values with the sensitive information needed.

## Run dev server
After installing, you may start the project with:
```bash
npm run dev
```

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join the T3 [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Planetscale](https://planetscale.com/docs)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.