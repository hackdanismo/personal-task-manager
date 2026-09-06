# Personal Task Manager

## Setup and Install React
To setup and install `React`, use `Vite`. `Vite` will ask for a project name, this can be `personal-task-manager` and select `React`:

```shell
$ npm create vite@latest
```

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