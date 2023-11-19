# LantekCodingChallenge - By Jorge Alejandro Lopez Montoya

This project was generated using [Nx](https://nx.dev) with angular 17 (https://angular.dev).

## Project structure

The project is structured as a monorepo, with the following structure:

![Project dependency graph. Nx Graph](https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/graph.png)

- apps: contains the different applications of the project
- shared: contains the different libraries of the project

The project is an application of microfrontend architecture, so it is composed by different applications that are independent and can be deployed independently. The applications are:

- host: is the main application of the project, a recipe application that allows to manage the remotes microfront of the project. It contains the main menu, a login screen, and the router outlet. It has been develop with standalone components, implementating funtional guards, interceptors and services.
- dashboard: is a microfrontend application that allows to interact with the lantek API. It has one standalone component, info table, that allows to show the information of the API.
- example-remote: is a microfrontend application that was create to show the potencial of the microfrontend architecture by allow scalability and independency of the develop of multiple applications. It has no functionality, it is just a showcase of the architecture.

The project also contains the following libraries:

- shared: contains the shared ui modules importated from angular material. The library is imported by the different applications of the project and is transversal to the project. It shows the potencial of the monorepo architecture by allowing to share code between the different applications without the need of creating a npm package or a git submodule.

## Development server

Run `nx serve host` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running the project

To run the project, you need to run the following commands:

- `npm install`
- `nx serve host` (in a terminal) to run the host application, the main application of the project. Be sure to install nx globally (`npm install -g nx`) to run the command.
- `npm run serve` is a custom command that runs the dashboard and example-remote applications. It is a custom command that runs the following commands:
  - npm run start:host
  - npm run start:dashboard
  - npm run start:example-remote

## Running unit tests

Run `nx test host` to execute the unit tests via [Jest](https://jestjs.io). or `nx test host --coverage` to get the coverage of the unit testing.

The unit testing was only applied to the host application, as it is the main application of the project. The unit testing was applied to the components, services, guards and interceptors of the application. The unit testing was not applied to the dashboard to save time and example-remote applications as it is just showcase application.

(https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/unitTest-host.png)

## Running end-to-end tests

Run `nx e2e host-e2e` to execute the end-to-end tests via [Playwright](https://playwright.dev/). or the custom command `npm run e2e-host` to run the end-to-end tests of the host application.

The e2e testing was only applied to the host application, as it is the main application of the project. The e2e testing was applied to the components, services, guards and interceptors of the application. The e2e testing was not applied to the dashboard to save time and example-remote applications as it is just showcase application.

(https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/e2e-host.png)

## deploy the project

Just run `nx build host` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Further help and communitation

Please contact me at jorgealejandrolopezmontoya@gmail.com or www.linkedin.com/in/jorge-alejandro-lopez-mo for any further help or communication. I will be happy to help you.
