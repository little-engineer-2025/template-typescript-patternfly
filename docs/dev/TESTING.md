# Testing the code

## Unit tests

We define the unit tests in the same directory as the component to verify. We
recommend to match one component - one file; and one test file per component.

app.ts => app.spec.ts

When we define a component that does not use templating, the file is named with
the extension `.ts`; in the other hand, if we are using templating for the
component, we will named the file as `.tsx`.

For creating mocks, we use the library [tx-mockito](https://github.com/NagRock/ts-mockito)
which allow to define the behavior.

We can check the coverage by running `make test-cov`.


