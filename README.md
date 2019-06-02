## Angular 7 OUTLINE, June 2019

#### Setup

- You will need **admin rights** on your machine.
- Install **Chrome** and the **Augury** extension for Chrome.
- Install **Visual Studio Code**.
- Install **NODE** version 8+, and NPM version 5.5+.

		node -v
		npm -v

- Install the **Angular CLI** tools globally.

		npm install -g @angular/cli
		ng --version
	
#### JS review
- Review of **ES5** fundamentals
- Review of new **ES6** features
- Functional programming
- Typescript.

#### Exercise a-intro
- Create a **minimal** Angular app using the Angular CLI.
- The **structure** of an Angular app.

#### Exercise b-shop
- Iterate over an array using **ngFor**.
- Add a currency **pipe**
- Add a **(click) event**
- Conditionally display/style using **ngIf** and **ngClass**.
- Define custom types using Typescript interfaces
- Use spread operator to make true separate copies.

#### Exercise c-compose

- *The starter version is the finished version of b-shop*
- Angular components are **composable**.
- Using **ng generate** to add a new component.
- Pass **inputs** into a component.
- Emit **output** events from a component.

#### Exercise d-translate
- Create a simple translation app from scratch.
- *The starter version is a jQuery application.*

#### Exercise e-inject

- *The starter version is the finished version of c-compose*
- Create a new **service** to read JSON data using HTTP.
- Connect a service to a component using Dependency Injection.
- Introduction to Observables in Angular.
- Setting up a Mock Service.

#### Exercise f-pipe
- Built-in Angular pipes
- Create a custom pipe.

#### Exercise g-observable
- Implement interval Observable with/without async pipe.
- Using form input valueChanges Observable with http.get to read weather data from API.

#### Exercise h-users
- *The starter version is a plain JS ES6 class.*
- Convert this to an Angular app. Handle the data transformation in either the service or the component.

#### Exercise i-mediator
- Loosely couple components using Inputs/Outputs.
- Refactor the code to use a service as the mediator. 

#### Exercise J-forms
- FormControls , FormGroups
- FormBuilder
- Validation
- Custom validation

#### Exercise k-router
- Define an Angular router.
- Route parameters
- Nested routes
- Guards.

#### Advanced features
- Directives
- HTTPclient talk with Node server
- Redux
- Testing.