# Main

Scss allows for greater control over the styling in a project in a more sane way.

The 'main.scss' file is nested into its own folder for issues with finding files needed in any styling such as images.
Nesting this file here allows us to use these files in our styling if needed without headaches later.

If you need to modify bootstrap please create a new file here(bootstrap.scss) and delegate all modifications here.
Link the file in pages/\_app.scss above the import for 'main.scss'.

# Project Conventions

The conventions defined below will help us keep our code clean, organized, and understandable.

## JS

{ examples in [ here ] }

Functions:

- Capital case for components [ AnExample ]
- CamelCase for hooks [ anExample ]
- Snake case for minor functions [ an_example ]

Variables:

- Snake case [ an_example ]

Types(typescript):

- CapitalCase for interfaces and custom types [ AnExample ]
  - please be very explicit with naming types. be verbose if needed.

## BEM

We will be employing the B.E.M. naming convention to prevent naming collisions.
If used correctly there shouldn't be a single style that overrides another.

Please read this if you are not familiar with this practice:
http://getbem.com/introduction/

It's an ugly naming convention, however it works to great effect in large, long running projects, with complicated styling and animations.
