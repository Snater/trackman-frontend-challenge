# Trackman Front-End Coding Challenge

As per request, the solution consists of a plain React app. This monorepo also contains a server that manages storing the facility data.

## Starting the application

### Installation

```bash
npm i
```

### Starting server and client

```bash
npm start
```

This will start both the server and the client in dev mode. (The server’s hostname and port may optionally be customized in the root `.env` file.)

## Features

Among others:
- Bootstrapped with [Vite](https://vite.dev/).
- Styling with [Tailwind CSS](https://tailwindcss.com/).
- Supported by [shadcn/ui](https://ui.shadcn.com/) / [Radix](https://www.radix-ui.com/). (The components in `/packages/client/src/components/ui` were pulled in and customized.
- I18n with [react-i18next](https://react.i18next.com/).
- Routing per [React Router](https://reactrouter.com/).
- Querying and mutating using [Apollo GraphQL Server and Client](https://www.apollographql.com/developers).
- Form processing per [React Hook Form](https://www.react-hook-form.com/).
- Front-end and back-end validation using shared [Zod](https://zod.dev/) schema.
- Back-end server implemented with [Express](https://expressjs.com/).
- Responsive layout.
- A11y checked.
- Everything TypeScript.

## Some more things I would have liked to do

- Paginated fetching of the facilities. The default facility id needs to be kept along the query key and sent to the server along the query as the default facility could be changed while stepping through the infinite query, potentially resulting in duplicated/missing facilities. To prevent a double fetch of the first batch, there would need to be a separate endpoint/query to just retrieve the current default facility id, which is then passed to the infinite query fetching all facilities.
- Proper server-side error handling/responses.
- Adding tests. Though there are no very complex components, which makes functional tests not too interesting. End-to-end tests would be nicer.
- Setting up Storybook.
- Nicer form error messages, creating a custom React Hook Form resolver taking care of the i18n.
- Extending ESLint configuration.
- The design template suggested having only one (local) set of working hours. I would have liked to add complexity to the time concept since the app now handles local time only, as well as only one opening and one closing time. However, facilities might be in different time zones and might have different working hours each day, and even multiple opening hours per day.
