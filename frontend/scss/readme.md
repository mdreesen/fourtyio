## Main

Scss allows for greater control over the styling in a project in a more sane way.

The 'main.scss' file is nested into its own folder for issues with finding files needed for render such as images.
Nesting this file here allows us to use these files in our styling if needed without headaches later.

If you need to modify bootstrap please create a new file here(bootstrap.scss) and delegate all modifications here.
Link the file in pages/\_app.scss above the import for 'main.scss'.

## BEM

We will be employing the B.E.M. naming convention to prevent naming collisions.
If used correctly there shouldn't be a single style that overrides another.

Please read this if you are not familiar with this practice:
http://getbem.com/introduction/

It's an ugly naming convention, however it works to great effect in large, long running projects, with complicated styling and animations.
