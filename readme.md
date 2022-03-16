# Getting started

Please visit either the frontend dir or backend dir for more info on a specific area.

You will need docker installed and using docker compose v2. Check your docker settings to enable the latest version of compose.

This project is a mono repo for Fourtyio.

Please ensure you have the docker containers running before developing this project.
It is suggested to run three terminals. One running the frontend, and two for the backend [one for the ts transpiler, and the other for nodemon]

# Project Conventions

The conventions defined below will help us keep our code clean, organized, and understandable.

## JS

{ examples in [ here ] }

Functions:

- Capital case for components [ AnExample ]
- Camel case for hooks starting with 'use' prefix [ useExample ]
- Snake case for minor functions [ an_example ]

Variables:

- Camel case for const [ anExample ]
- Snake case for let [ an_example ]

Types (typescript):

- Capital case for interfaces and custom types [ AnExample ]
  - please be very explicit with naming types. be verbose if needed.

### Imports and Exports

Please bias toward named exports when possible. Named exports provide a succint way to find functions and variables in the project as it grows.
Remember to use 'import type' when bringing in a type from another module. All types are removed at run time which provides a smaller and faster bundle in production.
Failing to do so will not make or break the project by any means, however it is inefficent and should be conciously avoided.

## Styling

Scss allows for greater control over the styling in a project in a more sane way.

The 'main.scss' file is nested into its own folder for issues with finding files needed in any styling such as images.
Nesting this file here allows us to use these files in our styling if needed without headaches later.

If you need to modify bootstrap please create a new file at /scss/\_scss/(bootstrap.scss) and delegate all modifications here.
Link the file in pages/\_app.scss above the import for 'main.scss'.

### BEM

We will be employing the B.E.M. naming convention to prevent naming collisions.
If used correctly there shouldn't be a single style that overrides another.

Please read this if you are not familiar with this practice:
http://getbem.com/introduction/

It's an ugly naming convention, however it works to great effect in large, long running projects, with complicated styling and animations.
