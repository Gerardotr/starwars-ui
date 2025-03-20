# StarwarsUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Technologies Used
- **Angular** - Frontend framework
- **NgRx** - State management for handling favorites
- **Interceptor** - Implemented to manage loading states
- **CSS** - Styling and theming
- **Bootstrap** - UI components for a modern and responsive design

## Features Implemented
### 1. **State Management with NgRx**
   - Integrated NgRx for efficient state management, specifically for handling favorite items.
   - Implemented actions, reducers, and effects for managing state updates asynchronously.

### 2. **HTTP Interceptor for Loading State**
   - Created a custom HTTP interceptor to manage and display loading indicators during API requests.
   - Ensured a smooth user experience by handling global request states effectively.

### 3. **Project Structure & Best Practices**
   - Organized the project using best practices for maintainability and scalability.
   - Structured modules and components efficiently to follow Angular guidelines.

### 4. **Attractive UI/UX Design**
   - Implemented a modern and responsive design for an improved user experience.
   - Used Angular Material and custom SCSS to enhance aesthetics and usability.


## Run the following command for init this project

`npm install --legacy-peer-deps`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
