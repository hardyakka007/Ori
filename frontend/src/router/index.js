import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/SplashView.vue'
import PlayView   from '../views/PlayView.vue'
import WatchView  from '../views/WatchView.vue'
import GameView   from '../views/GameView.vue'
import CareerView from '../views/CareerView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',        component: SplashView },
    { path: '/play',    component: PlayView   },
    { path: '/watch',   component: WatchView  },
    { path: '/game',    component: GameView   },
    { path: '/career',  component: CareerView },
  ],
})
