# Development Notes

Here you will find the reasoning and logic for choosing packages/patterns for this project.

## Libraries

- Vite (React + Typescript)
- Tailwind CSS
- React Router (DOM)
- Headless UI
- Heroicons
- React Hook Form
- Class Variance Authority
- tailwind-merge
- clsx
- json-server (used to mock API endpoints)
- react-error-boundary

## How to run

- Clone or download the project
- From the root project folder run the command `npm install`
- Rename the `.env.example` file to `.env`
  - set `http://localhost:4000` as the value for `VITE_API_URL`
  - set `Circle` as the value for `VITE_APP_NAME`
- Launch the development server using `npm run dev`
- Alternatively you can create a build using `npm run build`
- Open a browser window and navigate to `localhost:3000`

# Design + Implementation notes

One of the design goals for this project is to provide:

- Customization
- Separate concerns by providing a single source of truth
- Easy to follow, so future developers can work with ease

React as a UI library, unlike Ruby on Rails is not very opinionated on how a project should be structured/organized so it's imperative that some pattern or foundation is established as early as possible to ease developer anxiety and avoid the cognitive of load of having to come up with them later down the line.

In this project I have decided to go with the widely known `components` folder to store all components of the project. Each component has a corresponding descriptive subfolder that should make it easier for other team members to follow.
There is also a `pages` folder to store all the relevant pages that are eventually imported to the router; as well as a `hooks` and `context` folders to store specific custom hooks and context files necessary for the application.

Also, specific components folder have a `someComponentStyles` file that contains a single source of truth for styling that particular component with the use of "Class Variance Authority" library. It's goal, is to be able to apply different styles to a given component with the use of variants (each variant is known as an `intent`). This package allows working with Tailwind CSS without issues. We also use the additional libraries `tailwind-merge` and `clsx` to merge and conditionally apply Tailwind classes.

Example:
A button component can be rendered the following way:

```
<Button type="button">Click Here!</Button>
```

Without providing further props, the default "intent" for this button is 'primary' as is defined in the `buttonStyles` file so it will render just fine with the primary defined styles.

Alternatively, you could pass additional classes to override the default styles or even override another "intent" that was previously configured. Like so:

```
<Button
  type="button"
  className="place-self-start bg-yellow-400 capitalize"
>
  Click Here!
</Button>
```

Errors are rendered by the `ErrorPage` component. Routing errors are handled by React Router and React errors are intercepted by the `react-error-boundary` package that allows the opportunity to provide a fallback UI to display the corresponding error thrown by the app.

The `ErrorBoundary` component wraps the entire app (see `App.tsx`) and takes `ErrorPage` as default fallback component:

```
<ErrorBoundary
  FallbackComponent={ErrorPage}
  onError={(error, info) => {
    console.log(`[Boundary]`, error, info)
  }}
>
  {/* rest of the app goes here */}
</ErrorBoundary>
```
