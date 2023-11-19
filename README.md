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

![unit testing](https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/unitTest-host.png)

## Running end-to-end tests

Run `nx e2e host-e2e` to execute the end-to-end tests via [Playwright](https://playwright.dev/). or the custom command `npm run e2e-host` to run the end-to-end tests of the host application.

The e2e testing was only applied to the host application, as it is the main application of the project. The e2e testing was applied to the components, services, guards and interceptors of the application. The e2e testing was not applied to the dashboard to save time and example-remote applications as it is just showcase application.

![e2e testing](https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/e2e-host.png)

## deploy the project

Just run `nx build host` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Technical Questions

- How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test, use this as an opportunity to explain what you would add.

R/ Spend a total of 3 to 4 hours. My main idea was to cover integral topics of angular, in which I could show my use of services, my use of typescript, guards, and standalone components. I also saw it as an excellent way to show the microfronts architecture through the federation of modules with Nx and the potential it has for scalability. I performed unit testing only to the host to fundamental parts of the application, and for time optimization I decided to leave parts without coverage. In the same way I performed e2e tests to the host application using playwright leaving a part outside of the tests to save time. If I had more time I would have liked to finish the unit and the e2e testing, as well as add more functionality and style to the applications, I use angular material but I would have liked to create my own components, directives and custom UI library.

- What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

R/ I think the most useful feature of the latest version of angular is the use of standalone components. This allows to create components that are independent of the application, and that can be used in different applications. This is very useful for the creation of microfronts, as it allows to create components that can be used in different applications, and that can be developed independently. This allows to create applications that are scalable and independent of each other. In the project I used standalone components to create the info-table component, which is used in the dashboard and example-remote applications.

https://github.com/joalopezmo/code-test-for-lantek-position/blob/2cb81b8991ae7a9456e606867a52c7c45f049f17/apps/dashboard/src/app/remote-entry/screens/info-table/info-table.component.ts#L10-L17

- How would you track down a performance issue in production? Have you ever had to do this?

R/ With nx and angular is kind of easy to track down a performance issue in production. Nx has a command to analyze the bundle of the application, and angular has a command to analyze the bundle of the application. With this two commands you can analyze the bundle of the application and see the size of the different modules and components of the application. This allows to see the size of the different modules and components of the application, and to see if there is a performance issue in production. I have never had to do this, but I have used this commands to analyze the bundle of the application and see the size of the different modules and components of the application. Angular 17 has a devTools google-chrome extension that allows to see the size of the different modules, and components of the application and show graphically the injector tree to debug the early fase of the app.

![angular injector](https://github.com/joalopezmo/nx-monorepo/blob/master/apps/host/src/assets/angular-injector-tree.png)

- How would you improve the Lantek API that you just used?

R/ I would improve the Lantek API by adding a different form of auth to the API, maybe the use of token instead. I would also improve the API by allow other methods of the API, like the creation of new recipes, or the update of the recipes. I would also improve the API by adding a new endpoint that allows to get the information of a single recipe, instead of getting all the recipes of the API.

## Further help and communitation

Please contact me at jorgealejandrolopezmontoya@gmail.com or www.linkedin.com/in/jorge-alejandro-lopez-mo for any further help or communication. I will be happy to help you.
