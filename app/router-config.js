import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HouseController } from "./controllers/HouseController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view:'app/views/HomeView.html'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers:[HouseController],
    view: 'app/views/HouseView.html'
  },
  {
    path: '#/jobs',
    view: `You are on the jobs 🧑‍🍳 page`
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])
