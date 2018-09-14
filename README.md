# interview-assignment
Noona developer interview assignment template

## Running the project

To run this project you need to have the following installed:

- Maven 3
- Node and NPM (tested with node v10.2.0)
- We use yarn for the dependency management but you can also use npm if you do not have yarn installed
- Angular CLI (installing with yarn `yarn global add @angular/cli` or with npm `npm install -g @angular/cli`)
    - Documentation for Angular CLI can be found from https://github.com/angular/angular-cli/wiki

### Backend
- If using IDE such as IntelliJ IDEA you can run the Spring AssignmentApplication main class inside the IDE (modified code will be hotswapped after compile)
- If you wish to run the project in terminal you can run 
    - `mvn clean install` inside the root folder first and then,
    - `mvn spring-boot:run` inside the `backend` project

### Frontend
- Run `yarn install` or `npm install` in `frontend/src/main/resources/noona-assignment`
- Run `ng serve` which serves the frontend assets at `localhost:4200` for the API to work you have to have the backend running as the frontend proxies the API calls to the backend server

### Further Instructions

- Further instructions can be found in the landing page of the application
