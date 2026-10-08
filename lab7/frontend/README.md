# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


#   Frontend-Backend
1. create project folder (lab7)
2. create frontend backend folder with in project folder
3. open terminal and split it in two 
4. open frontend in to left side
5. open backend into right side terminal
6. IN backend
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend, update `type to module` and script 
    d. create app.js
7. In frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select frame work as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend


## add tailwind to existing react project 
1. open the terminal and goto project frontend folder 
2. install Tailwind by 
``npm install tailwindcss @tailwindcss/vite``
3. open vite.config.js
4. add `import tailwindcss from "@tailwind















7. open src/index.css and remove all contents , then add below line 
    `@import "tailwindcss";`
    
