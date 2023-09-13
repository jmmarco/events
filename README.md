# Goal

Figma: https://www.figma.com/file/etvXd825IzwNOwa2KrFLnh/

The aim of this challenge is to build **a standalone web application that can be cloned and run locally**. You can use your favorite build pipeline and tools, set up linting, code formatting and type checking in any way you feel comfortable.

Note that although it's welcome, **a sophisticated build is not required for the completion of the challenge and the focus while reviewing will be on the code itself**: a balanced architecture that can be extended, but it's not thrown out of the proportion in relation to the subject of the challenge.

Using the provided designs in the Figma file, please build the page including the form split into multiple steps. The challenge contains required and optional tasks as well as some general requirements, which are all outlined below.

## Required features - Create and edit event

- Create a reusable full-screen page layout as per the Figma file. It should contain a top header with the close button (you don't need to handle the action in any way) and the page name. The actual content of the page should be limited in width as per the design and stretch to a 100% (with a bit of horizontal padding) on mobile. (You can set up a mobile breakpoint in any way you think it's reasonable - there is no specific value set).
- Create two pages: **Create event** and **Edit event.** They have to be accessible under different URL routes, Edit event should take an ID URL parameter so that the API can fetch a correct record from the database. No need to mock the API if you don't have the time and resources to do so, just set up the routing.
- Ideally, the form component and logic should be abstracted out, so it can be reused between create and edit pages.
- `Name` and `Where` are required, all the other fields are optional. Provide an error handling that will display relevant errors - refer to Figma for the design (`Form validation`).
- `Date and time` should be a date picker of your choice, `time` is any timespan selector you prefer - the only requirement is that it sets a duration in hours/minutes.

## **Acceptance criteria**

- The application has to be created using modern ReactJS (functional components, hooks, etc.)
- The styling and UI can be implemented using any technology you are comfortable with, but it has to provide some degree of customization. The main colors and sizing of the text should be defined in a separate place to provide a single source of truth.
- **Assume the code you create will be used by people unfamiliar with it at the time of the implementation** - make sure it's clean and well readable.

## CSS styling

- For the styling, use [Tailwind CSS](https://tailwindcss.com/) framework. You can also use [Tailwind UI](https://tailwindui.com/) components as needed (login provided in email), but make sure the React code is clean, and it becomes apparent what each HTML element does for a person unfamiliar with the technology. Tip: See [Tailwind CSS Core Concepts](https://tailwindcss.com/docs) section of its documentation for more information.
- Provide a basic implementation of type checking for React components. Note: **the goal should be to provide in-context IDE suggestions more than a robust compile-level safety net**.

### General Notes

We suggest that you break this project up into multiple GitHub issues (i.e., 'components' of the project), and create a PR for each issue. We propose having a base PR with the foundational elements of the project, and creating subsequent PRs against the base PR. This will make it easier for us to comprehend aspects of the project and ask questions or provide feedback in pull requests.

Break down the task into smaller features and send PRs for review when ready. Don’t open more than 3 PRs at once and don’t wait for the entire project to be done before sending out the PRs

This is a paid assignment. Upon completion of the assignment, you'll be compensated $1,000 regardless of whether we proceed with an offer. 


**Things we're looking for in this project**

1. Attention to detail at every level (React, CSS, structure, interactions, performance, etc.)
2. Ability to scope down a big task into smaller, more manageable chunks
3. How you perceive and act on feedback
4. Communication and documentation
