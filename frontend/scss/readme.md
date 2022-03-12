Scss allows for greater control over the styling in a project in a more sane way.

The 'main.scss' file is nested into its own folder for issues with finding files needed in any styling such as images.
Nesting this file here allows us to use these files in our styling if needed without headaches later.

If you need to modify bootstrap please create a new file here(bootstrap.scss) and delegate all modifications here.
Link the file in pages/\_app.scss above the import for 'main.scss'.
