# Architecture

The repository implement a single page application, and the different components
are structured in the way below:

```raw
src/
  app/
    Components/    Shared components
      hooks/

    Layouts/       Different content layout
    Pages/         Contain all the pages
      Main/
        Components/  Contain specific components defined for the page
                     when they are reused in more than one page, it promotes to
                     the base Components/ directory.
    Api/           Hold all the self-generated API client code

test/
```

