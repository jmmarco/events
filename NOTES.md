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

## How to run

- Clone or download the project
- From the root project folder run the command `npm install`
- Launch the development server using `npm run dev`
- Alternatively you can create a build using `npm run build`
- Open a browser window and navigate to `localhost:3000`

# Design notes

One of the design goals for this project is to provide:

- Customization
- Separate concerns by providing a single source of truth
- Easy to follow, so future developers can work with ease

React as a UI library, unlike Ruby on Rails is not very opinionated on how a project should be structured/organized so it's imperative that some pattern or foundation is established as early as possible to ease developer anxiety and avoid the cognitive of load of having to come up with them later down the line.

In this project I have decided to go with the widely known `components` folder to store all components of the project, and a `pages` folder to store all the relevant pages that hold multiple components are are imported to the router.

Also, specific components folder have a `someComponentStyles` file that contains a single source of truth for styling that particular component with the use of "Class Variance Authority" library. It's goal, is to be able to apply different styles to a given component with the use of variants (each variant is known as an `intent`). This package allows working with Tailwind CSS without issues. We also use the additional libraries `tailwind-merge` and `clsx` to merge and conditionally apply Tailwind classes.
