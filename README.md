# Vue Frontend Rusich (Vue.js, Sass, Vite)

> Link: https://vue-frontend-rusich.vercel.app/

> Project for `AddNoise` (<https://addnoise.su/>)

> Case: Develop a responsive main page: header, slider, filter, "our projects" block, "about us" block and menu. Animation and hovers at your discretion. Use a pre-made design.

> Stack: `Vue`, `JavaScript`, `SCSS`.

## Usage

### **Using via npm**

- Install `Node.js`: <https://nodejs.org/en/download/>;
- Clone this repository: `git clone https://github.com/kenclaron/vue-frontend-rusich.git`;
- Go to folder of repository: `cd ./vue-frontend-rusich`;
- Install dependencies: `npm install`;
- Type: `npm run dev` (launching in dev-mode in browser);
- Type: `npm run lint` (checking lint errors);
- Type: `npm run build` (build project for production):
  - Results save in folder `./dist`;
- Type: `npm run preview` (preview builded project locally).

```text
  git clone https://github.com/kenclaron/vue-frontend-rusich.git
  cd ./vue-frontend-rusich
  npm install
  npm run dev
  npm run lint
  npm run build
  npm run preview
```

### **Using via Docker**

- Install Node.js - <https://nodejs.org/en/>
- Install Docker - <https://www.docker.com/products/docker-desktop/>
- Type: `docker pull ghcr.io/kenclaron/vue-frontend-rusich:main` to clone package in Docker
- Type: `docker run -p 8080:80 -it --name vue-frontend-rusich ghcr.io/kenclaron/vue-frontend-rusich:main` to launch project
- Open `localhost:8080` or `127.0.0.1:8080`

```text
  docker pull ghcr.io/kenclaron/vue-frontend-rusich:main
  docker run -p 8080:80 -it --name vue-frontend-rusich ghcr.io/kenclaron/vue-frontend-rusich:main
```

### **Open Webpage**

- Open: https://vue-frontend-rusich.vercel.app/

## Project folder

```text
vue-frontend-rusich
├── dist             - Builded project
│   └── assets       - Sources from src/static
│       ├── js       - Compiled .js-files
│       └── css      - Compiled .css-files
│
├── public           - Public files
│   ├── images       - Public images
│   └── ...
│
└── src              - Source fiels
    ├── assets
    │   ├── fonts
    │   ├── scss
    │   └── ...
    │
    ├── components
    │   ├── icons    - .svg-files for using in components
    │   ├── subforms - sub-components
    │   └── ...
    │
    ├─ App.vue
    └─ main.js
```

## Preview

[<img src="https://i.imgur.com/YB1EI14.png" width="48%"/>](https://i.imgur.com/YB1EI14.png)
[<img src="https://i.imgur.com/Jd5Kkau.png" width="48%"/>](https://i.imgur.com/Jd5Kkau.png)
[<img src="https://i.imgur.com/fe8p8Pj.png" width="48%"/>](https://i.imgur.com/fe8p8Pj.png)
[<img src="https://i.imgur.com/4vOJIA9.png" width="48%"/>](https://i.imgur.com/4vOJIA9.png)
[<img src="https://i.imgur.com/57CSyR3.png" width="96.5%"/>](https://i.imgur.com/57CSyR3.png)

## License

The **Vue Frontend Rusich** licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Author

> You can express your gratitude by clicking on one of the links

- [Personal website](https://kenclaron.github.io/kenclaron)
- [VK](https://vk.com/club190729942)
