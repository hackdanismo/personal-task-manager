# Personal Task Manager

## Setup and Install React
To setup and install `React`, use `Vite`. `Vite` will ask for a project name, this can be `personal-task-manager` and select `React`:

```shell
$ npm create vite@latest
```

<img width="858" height="421" alt="Install React using Vite." src="https://github.com/user-attachments/assets/cf39b0eb-48ed-4de7-b1b7-c9929ad27383" />

<img width="859" height="294" alt="Select TypeScript from the available options." src="https://github.com/user-attachments/assets/4e643459-1f18-48a6-8566-ed409a102f4c" />

<img width="860" height="263" alt="Selecting ESLint." src="https://github.com/user-attachments/assets/29a59c3c-da3f-457d-affc-9f4de74587ed" />

Make sure the `.gitignore` file has been added to prevent files and directories, such as `node_modules`, from being added to version control.

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## Run the Development Server
Once `React` has been setup and installed using `Vite`, run the development server locally.

```shell
$ cd personal-task-manager
$ npm run dev
```

The local development server will run and the application can be viewed here: `http://localhost:5173/`.

<img width="1616" height="919" alt="The React application running locally." src="https://github.com/user-attachments/assets/b64b8672-246f-458b-8bd5-f86d0ff7ab48" />

## Clean Install
